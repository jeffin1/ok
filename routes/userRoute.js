const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/getUsers', getUser);
userRoutes.post('/createUsers', createUser);
userRoutes.put('/updateUsers/:id', updateUser);
userRoutes.delete('/deleteUsers/:id', deleteUser);

module.exports = userRoutes;
