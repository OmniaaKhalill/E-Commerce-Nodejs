
//const fs=require('fs')

const Products= require('../models/products');

//const { options } = require("options");



//////// user + seller ////
const getAllProductBySeller = async (req, res) => {
    const sellerId = req.params.id;
    try {
        const products = await Products.find({ seller: sellerId });
        res.json(products);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




///////////////// user+seller ////////////////////


const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Products.findById( productId ); // Use _id for MongoDB ObjectId
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



///////////////// user+seller ////////////////////


const getProductByName = async (req, res) => {
    const productName = req.params.name;
    try {
        const products = await Products.find({ name: productName });
        if (products.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(products);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



/////////////// seller///////////////////

const addProduct = async (req, res) => {
    const productData = req.body;
    try {
        // Create a new product using the data from the request body
        const newProduct = await Products.create(productData);
        // Respond with the newly created product
        res.status(201).json(newProduct); // 201 status for resource created
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



////////////// seller //////////////
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        // Delete the product matching the provided productId
        await Products.deleteOne({ _id: productId }); // Use _id for MongoDB ObjectId
        // Respond with a success message
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


/////////// seller //////////////


const editProduct = async (req, res) => {
    const updatedData = req.body;
    const productId = req.params.id;
    try {
        // Update the product matching the provided productId with the updated data
        await Products.updateOne({ _id: productId }, updatedData); // Use _id for MongoDB ObjectId
        // Retrieve the updated product from the database
        const updatedProduct = await Products.findOne({ _id: productId }); // Use _id for MongoDB ObjectId
        // Respond with a success message and the updated product
        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





module.exports={getAllProductBySeller,getProductById,getProductByName,addProduct,deleteProduct,editProduct}
