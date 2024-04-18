
const Users= require('../models/users');


const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if (users.length>0)
        res.json(users);
        else
        res.json("users");

    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



///////////////// user+seller ////////////////////


const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Users.findById( userId ); 
        if (!user) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.json(user);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




/////////////// admin + seller maybe///////////////////

const addUser = async (req, res) => {
    const userData = req.body;
    try {
        // Create a new product using the data from the request body
        const newUser = await Users.create(userData);
        // Respond with the newly created product
        res.status(201).json(newUser); // 201 status for resource created
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



////////////// admin //////////////
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        // Delete the product matching the provided productId
        await Users.deleteOne({ _id: userId }); // Use _id for MongoDB ObjectId
        // Respond with a success message
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


/////////// seller+ admin //////////////


const editUsers = async (req, res) => {
    const updatedData = req.body;
    const userId = req.params.id;
    try {
        // Update the product matching the provided productId with the updated data
        await Users.updateOne({ _id: userId }, updatedData); // Use _id for MongoDB ObjectId
        // Retrieve the updated product from the database
        const updatedUser = await Users.findOne({ _id: userId }); // Use _id for MongoDB ObjectId
        // Respond with a success message and the updated product
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        // If an error occurs, log the error message and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};








module.exports={getAllUsers,getUserById,addUser,deleteUser,editUsers}