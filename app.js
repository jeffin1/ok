
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const url = process.env.Mdata;

const app = express();
app.use( bodyparser.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

mongoose.connect(url).then(() => {
    console.log('Database connected');
    app.listen(4001, () => {
        console.log('Server is running on port 4001');
    });
}).catch((err) => {
    console.log('Database connection error:', err);
});
