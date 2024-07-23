require('dotenv').config(); // Make sure this is the very first line

const express = require('express');
const mongoose = require('mongoose');
const app = require('./app'); // Import your Express app
const databaseConnection = require('./config/database'); // Database connection function

console.log('Environment Variables:', process.env);
console.log('Database URI:', process.env.DB);
console.log('Server Port:', process.env.PORT);

const connectToDatabase = () => {
    console.log('Connecting to database:', process.env.DB);
    mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database connection successful');
        })
        .catch(err => {
            console.error('Database connection error:', err);
        });
}

connectToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
