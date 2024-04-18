const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
     type: String, 
     required: [true,"name required"] 
    },

    slug: {
      type: String,
      lowercase: true
    },

  email:{ type: String, 
    required: [true,"email required"],
    unique:true,
    lowercase:true
  } ,
  password:{ type: String, 
    required: [false,"password required"],
    minlength:[6,"too short passord"],
    
  },
  role:{
    type:String,
    enum:["user","admin"],
  }
    ,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
  
},
{timestamps:true}
);

const Users = mongoose.model('User', userSchema);

module.exports = Users;

