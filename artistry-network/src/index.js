const express = require('express');
const cors = require('cors');
const path = require('path')
const { PrismaClient } = require('./generated/client');
const app = express();
const prisma = new PrismaClient;
const port = 3001;

app.use(cors());
//   Xử lý JSON data
app.use(express.json());
//  // Xử lý x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api', require('./router/api'));
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});