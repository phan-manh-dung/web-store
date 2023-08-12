const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_store', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect succes');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect };
