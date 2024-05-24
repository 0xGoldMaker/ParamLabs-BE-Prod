const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  token_address: { type: String, required: true },
  token_id: { type: String },
  user: String,
  status: String,
  uri: String,
  name: String,
  description: String,
  image_url: String,
  metadata: {
    Body: String,
    Eyes: String,
    name: String,
    Halos: String,
    Balds: String,
    Masks: String,
    image: String,
    edition: Number,
    Bandanas: String,
    Elements: String,
    Vetements: String,
    Background: String,
    'Bald Masks': String,
    Foundation: String,
    description: String,
    'Bandana Masks': String,
  },
  orders: {
    sell_orders: {
      order_id: Number,
      user: String,
      status: String,
      buy_quantity: String,
      buy_decimals: Number,
    },
  },
  // collection: {
  //     name: String,
  //     icon_url: String
  // },
  created_at: String,
  updated_at: String,
});

// module.exports = mongoose.model('nftproducts', schema);
module.exports = mongoose.model('genesisCollection', schema);
