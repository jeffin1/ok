const User = require('../models/userModel');


const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ message: 'Users retrieved successfully', users });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while retrieving the users' });
    }
};


const createUser = async (req, res) => {
    const { username, email, password } = req.body; 

    try {
        const newUser = new User({ username, email, password });
        const user = await newUser.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
};



const updateUser = async (req, res) => {
    const { username, email, password } = req.body; 
    const userId = req.params.id;

    try {
       
        const user = await User.findByIdAndUpdate(
            userId,
            { username, email, password },
            { new: true} 
        );
        
      
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (err) {
       
        res.status(500).json({ error: 'An error occurred while updating the user' });
    }
};



const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        
        const user = await User.findByIdAndDelete(userId);
        
      
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
     
        res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
};


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
