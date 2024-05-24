const { ImmutableX, Config } = require('@imtbl/core-sdk');
const log = require('debug')('app:controllers:nft');
const { sendError } = require('~/utils/utils');
const { User, Collection } = require('~/models');
const Metadata = require('~/models/metadata');

const immutableConfig = process.env.SANDBOX === true ? Config.SANDBOX : Config.PRODUCTION;
const immutableClient = new ImmutableX(immutableConfig);

exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({
      where: { email: email.toLowerCase() },
    });
    if (!user) {
      return sendError(req, res, 400, 'No user found for given email.');
    }
    return res.status(200).json({ success: true, user });
  } catch (err) {
    log(err);
    return sendError(req, res, 500, 'Invalid User');
  }
};

exports.getProductsByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email.toLowerCase() },
    });
    if (!user) {
      return sendError(req, res, 400, 'No user found for given email.');
    }
    if (!user.eth_key) {
      return sendError(req, res, 400, "User doesn't have wallet connected.");
    }
    let assetCursor = {};
    const products = [];
    let collectionProducts = [];
    do {
      const assetRequest = immutableClient.listAssets({
        user: user.eth_key,
        cursor: assetCursor,
        status: 'imx',
        collection: process.env.COLLECTION_PROJECT_ID,
        sellOrders: true,
      });
      collectionProducts = collectionProducts.concat(assetRequest.result);
      assetCursor = assetRequest.cursor;
    } while (assetCursor);

    for (let i = 0; i < collectionProducts.length; i += 1) {
      const collection = Collection.findOne({
        where: { token_address: collectionProducts[i].token_address },
      });
      if (collection) {
        const metadata = Metadata.findOne({
          collection_id: collection.id,
          metadata_id: collectionProducts[i].token_id,
        });
        if (metadata) {
          products.push(collectionProducts[i]);
        }
      }
    }
    return res.status(200).json({ success: true, products });
  } catch (err) {
    log(err);
    return sendError(req, res, 500, 'Server Error');
  }
};

exports.getIMXProductsByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({
      where: { email: email.toLowerCase() },
    });
    if (!user) {
      return sendError(req, res, 400, 'No user found for given email.');
    }
    if (!user.eth_key) {
      return sendError(req, res, 400, "User doesn't have wallet connected.");
    }
    let assetCursor = {};
    let products = [];
    do {
      const assetRequest = immutableClient.listAssets({
        user: user.eth_key,
        cursor: assetCursor,
        status: 'imx',
        collection: process.env.COLLECTION_PROJECT_ID,
        sellOrders: true,
      });
      products = products.concat(assetRequest.result);
      assetCursor = assetRequest.cursor;
    } while (assetCursor);

    return res.status(200).json({ success: true, products });
  } catch (err) {
    log(err);
    return sendError(req, res, 500, 'Server Error');
  }
};

exports.walletHasKiraNft = async (req, res) => {
  // TODO: Maybe also request the collection address to know which collection to query in imx
  const { wallet, kiraNftId } = req.body;
  try {
    const kiraNFT = await immutableClient.getAsset({
      tokenId: kiraNftId,
      tokenAddress: process.env.COLLECTION_PROJECT_ID,
    });
    return res.status(200).json({ success: true, ownsKiraNFT: kiraNFT.user === wallet });
  } catch (err) {
    log(err);
    return sendError(req, res, 500, 'Server Error');
  }
};
