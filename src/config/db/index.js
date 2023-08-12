const mongoose = require('mongoose');

const connect = () => {
    mongoose
        .connect('mongodb://localhost:27017/your-database-name', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to database'))
        .catch((error) => console.error('Connection error:', error));
};

module.exports = { connect };
