
const jwt = require('jsonwebtoken');
const Users= require('../models/users');

const signup= async (req,res)=>{
    //create user
 const user =await Users.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
 });


    //genrate  token
    const token = jwt.sign({userId:user._id},scrtKey,{expiresIn:'90d'})

}









const scrtKey="wnjncwecnwiencnwenwvbvuenncjnjsniweuc"