require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const router = require('./router/auth-router');
const connectDB = require("./utils/db");

// Middlewares
app.use(express.json());


//Mounting the router
app.use("/api/auth",router);


connectDB().then( () => {app.listen(PORT, () => {
    console.log(`Server is running at http://localhost: ${PORT}`);
});
});




