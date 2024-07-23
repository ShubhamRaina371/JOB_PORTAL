const mongoose = require('mongoose');

const databaseConnection = () => {
    console.log('Connecting to database:', process.env.DB); // Debugging line
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => {
        console.log(`Database connected successfully at server ${data.connection.host}`);
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });
};

module.exports = databaseConnection;
