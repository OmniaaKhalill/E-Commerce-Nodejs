const express = require('express')
//create router 
let router = express.Router();
const {getAllProductBySeller,getProductById,getProductByName,addProduct,deleteProduct,editProduct}= require('../controllers/products')


//get
router.get("/sellers/:id", getAllProductBySeller)  //

//get by id
router.get("/:id", getProductById);

//get by name
router.get("/:name", getProductByName);


//post
 
 router.post("", addProduct);
 
 //delete
router.delete("/:id",deleteProduct );

 //delete
 router.patch("/:id",editProduct );


 
 
module.exports=router;