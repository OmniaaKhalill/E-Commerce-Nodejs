
const express = require('express')
const mongoose = require('mongoose');


const ordersRoutes = require('./routes/orders')
const productsRoutes = require('./routes/products')
const sellersRoutes = require('./routes/sellers')
const usersRoutes = require('./routes/users')



const app = express() 

mongoose.connect('mongodb://127.0.0.1:27017/storeDB2')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err)
  })
app.use(express.json())


app.use('/orders',ordersRoutes)
app.use('/products',productsRoutes)
app.use('/sellers',sellersRoutes)
app.use('/users',usersRoutes)





const port =3000;
app.listen(port,()=>{
    console.log(`server is listening  sucesssfilly on port ${port}`);

});

