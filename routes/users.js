const express = require('express')
//create router 
let router = express.Router();
const {getAllUsers,getUserById,addUser,deleteUser,editUsers}= require('../controllers/users')


//get
router.get("", getAllUsers)

//get by id
router.get("/:id", getUserById);

 //post
 
 router.post("", addUser);
 
 //delete
router.delete("/:id",deleteUser);

 //delete
 router.patch("/:id",editUsers );


 
 
module.exports=router;