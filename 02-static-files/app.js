const express = require('express')
const path = require('path');
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000);

/*
Essayer :

http GET localhost:3000/public/html/500.html
http GET localhost:3000/public/style.css
http GET localhost:3000/public/alert.js

*/