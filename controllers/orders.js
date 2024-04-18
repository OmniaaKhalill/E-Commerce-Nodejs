

const Orders= require('../models/orders');

//const { options } = require("options");


//////// user + seller ////
const getAllOrders = async (req, res) => {
    
    try {
        const orders = await Orders.find();
        if(orders.length>0)
        res.json(orders);
        else
        res.json("no orders found");


    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



//////// user + seller ////
const getOrdersByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        const orders = await Orders.find({user : userId });
        res.json(orders);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




///////////////// user+seller ////////////////////


const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Orders.findById( orderId ); 
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};






/////////////// seller///////////////////

const addOrder = async (req, res) => {
    const orderData = req.body;
    try {
        // Create a new product using the data from the request body
        const newOrder = await Orders.create(orderData);
        // Respond with the newly created product
        res.status(201).json(newOrder); // 201 status for resource created
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



////////////// seller //////////////
const deleteOrder = async (req, res) => {
    const ordertId = req.params.id;
    try {
        // Delete the product matching the provided productId
        await Orders.deleteOne({ _id: ordertId }); // Use _id for MongoDB ObjectId
        // Respond with a success message
        res.status(200).json({ message: 'Ordert deleted successfully' });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


/////////// seller //////////////


const editOrder = async (req, res) => {
    const updatedData = req.body;
    const orderId = req.params.id;
    try {
        // Update the product matching the provided productId with the updated data
        await Orders.updateOne({ _id: orderId }, updatedData); // Use _id for MongoDB ObjectId
        // Retrieve the updated product from the database
        const updatedOrder = await Orders.findById(orderId); // Use _id for MongoDB ObjectId
        // Respond with a success message and the updated product
        res.status(200).json({ message: 'Order updated successfully', updatedOrder });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





module.exports={getAllOrders,getOrdersByUserId,getOrderById,addOrder,deleteOrder,editOrder}
