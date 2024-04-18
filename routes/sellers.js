const express = require('express')
//create router 
let router = express.Router();
const {getAllSellers,getSellerById,addSeller,deleteSeller,editSeller}= require('../controllers/sellers')


//get
router.get("", getAllSellers)

//get by id
router.get("/:id", getSellerById);

 //post
 
 router.post("", addSeller);
 
 //delete
router.delete("/:id",deleteSeller );

 //delete
 router.patch("/:id",editSeller );


 
 
module.exports=router;