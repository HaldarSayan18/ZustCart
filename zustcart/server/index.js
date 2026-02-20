const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//  db connection
const connectDB = require('./lib/connectDB');
connectDB();

// cors
app.use(cors());

// routes
app.use('/api',require('./route/productRoute.js'));

const PORT = process.env.PORT || 8080;

function startServer() {
    app.listen(PORT, (res) => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
    app.get('/', (req, res) => {
        res.send('Connected to server');
    });
}
startServer();