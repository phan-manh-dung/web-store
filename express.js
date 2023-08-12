const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const port = process.env.PORT || 5000;

//http logger
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/admin/delete', (req, res) => {
    // Xử lý yêu cầu cho trang "/admin/delete" ở phía backend
    res.send('Backend Delete Page');
});

app.get('/api/admin/delete', (req, res) => {
    // Xử lý yêu cầu cho trang "/admin/delete" ở phía backend
    res.send('Backend Delete Page');
});

// Các định tuyến khác...

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

///template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views')); // đường dẫn tới view để lấy code tĩnh động
app.use(express.static(path.join(__dirname, 'src', 'public'))); // Điều chỉnh đường dẫn tùy theo vị trí của thư mục public

app.use(morgan('combined'));
// database
const db = require('./src/config/db');
// connect to db
//router init
// router
//

db.connect();
const apiRouter = require('./src/routes/api'); // Import router

// Use router for APIs
app.use('/api', apiRouter);

// Handle routes for React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
