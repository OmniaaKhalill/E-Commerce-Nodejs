const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
 
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},{timestamps:true}
);

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
