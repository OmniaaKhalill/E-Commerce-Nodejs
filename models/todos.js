const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  id:{
    type:Number,
    unique:true
  },

  title: {
    type: String,
    unique: true,
    required:true
  },

  status:{
    type:String,
    enum:["to-do","in progress","done"],
    default:'to-do'
  }

});


//todo => collection name 
const todosModel =mongoose.model('Todo',todoSchema)

module.exports=todosModel