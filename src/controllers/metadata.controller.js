const log = require('debug')('app:controllers:metadata');
const { sendError } = require('~/utils/utils');
const Metadata = require('~/models/metadata');

exports.addMetadata = async (req, res) => {
  const params = {
    collection_id: req.body.collection_id,
    metadatas: req.body.metadatas,
  };
  try {
    for (let i = 0; i < params.metadatas.length; i += 1) {
      Metadata.create({
        collection_id: params.collection_id,
        metadata_id: params.metadatas[i].metadata_id,
        metadata: params.metadatas[i].metadata,
      });
    }
    return res.json({ success: true });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};

exports.getMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.find({});
    return res.json({ success: true, metadata });
  } catch (err) {
    log(err);
    return sendError(req, res, 400, 'Server error');
  }
};
