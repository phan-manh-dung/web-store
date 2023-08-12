const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web_store', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Fail');
    }
}

module.exports = { connect };
