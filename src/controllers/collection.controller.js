const log = require('debug')('app:controllers:collection');
const { sendError } = require('~/utils/utils');
const imx = require('~/lib/imx');
const { Collection } = require('~/models/index');

exports.getCollections = async (req, res) => {
  try {
    const collections = await imx.getCollections();
    return res.status(200).json({ success: true, collections });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};

exports.addCollection = async (req, res) => {
  const params = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    token_address: req.body.token_address,
    metadata_url: req.body.metadata_url,
  };
  try {
    await Collection.create({
      name: params.name,
      description: params.description,
      image: params.image,
      token_address: params.token_address,
      metadata_url: params.metadata_url,
    });
    const collections = await Collection.findAll();
    return res.status(200).json({ success: true, collections });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};

exports.updateCollection = async (req, res) => {
  const { id, name, description, image, token_address, metadata_url } = req.body;
  try {
    await Collection.upsert({
      id,
      name,
      description,
      image,
      token_address,
      metadata_url,
    });
    const collections = await Collection.findAll();
    return res.status(200).json({ success: true, collections });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};

exports.deleteCollection = async (req, res) => {
  const { id } = req.body;
  try {
    await Collection.destroy({ where: { id } });
    const collections = await Collection.findAll();
    return res.status(200).json({ success: true, collections });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};
