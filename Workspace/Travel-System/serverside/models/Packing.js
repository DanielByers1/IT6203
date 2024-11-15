const mongoose = require('mongoose');

const packingSchema = new mongoose.Schema({
  item: { type: String, required: true },
}, { collection: 'Item_List' }); 

module.exports = mongoose.model('Packing', packingSchema);
