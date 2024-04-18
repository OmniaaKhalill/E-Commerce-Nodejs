const express = require('express')
//create router 
let router = express.Router();
const {getAllOrders,getOrdersByUserId,getOrderById,addOrder,deleteOrder,editOrder}= require('../controllers/orders')

// get all orders 
router.get("", getAllOrders)

//get by users
router.get("users/:id", getOrdersByUserId)

//get by id
router.get("/:id", getOrderById);

 //post
 
 router.post("", addOrder);
 
 //delete
router.delete("/:id",deleteOrder );

 //delete
 router.patch("/:id",editOrder );


 
 
module.exports=router;