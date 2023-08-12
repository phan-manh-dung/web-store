const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const port = process.env.PORT || 5000;

//http logger
app.use(express.static(path.join(__dirname, 'build')));

///template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views')); // đường dẫn tới view để lấy code tĩnh động
app.use(morgan('combined'));
// database
const db = require('./src/config/db');
// connect to db
db.connect();

// router
app.get('/dung', (req, res) => {
    return res.render('dung'); // Chắc chắn tên tệp tin view là "dung.hbs"
});

app.get('/new', (req, res) => {
    return res.render('new'); // Chắc chắn tên tệp tin view là "new.hbs"
});

//
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
