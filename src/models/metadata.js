const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema(
  {
    collection_id: {
      type: Number,
      default: 0,
    },
    metadata_id: {
      type: String,
      default: '',
    },
    metadata: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('metadata', metadataSchema);
