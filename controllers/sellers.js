

const Sellers= require('../models/sellers');

//////// admin ////
const getAllSellers = async (req, res) => {
    try {
        const sellers = await Sellers.find();
        res.json(sellers);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




///////////////// user+seller ////////////////////


const getSellerById = async (req, res) => {
    const sellerId = req.params.id;
    try {
        const seller = await Sellers.findById( sellerId ); 
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.json(seller);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




/////////////// admin + seller maybe///////////////////

const addSeller = async (req, res) => {
    const sellerData = req.body;
    try {
        // Create a new product using the data from the request body
        const newSeller = await Sellers.create(sellerData);
        // Respond with the newly created product
        res.status(201).json(newSeller); // 201 status for resource created
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



////////////// admin //////////////
const deleteSeller = async (req, res) => {
    const sellerId = req.params.id;
    try {
        // Delete the product matching the provided productId
        await Sellers.deleteOne({ _id: sellerId }); // Use _id for MongoDB ObjectId
        // Respond with a success message
        res.status(200).json({ message: 'Seller deleted successfully' });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


/////////// seller+ admin //////////////


const editSeller = async (req, res) => {
    const updatedData = req.body;
    const sellerId = req.params.id;
    try {
        // Update the product matching the provided productId with the updated data
        await Sellers.updateOne({ _id: sellerId }, updatedData); // Use _id for MongoDB ObjectId
        // Retrieve the updated product from the database
        const updatedSeller = await Sellers.findOne({ _id: sellerId }); // Use _id for MongoDB ObjectId
        // Respond with a success message and the updated product
        res.status(200).json({ message: 'Seller updated successfully', updatedSeller });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports={getAllSellers,getSellerById,addSeller,deleteSeller,editSeller}