// Environment variables
require("dotenv").config();
const {PORT} = process.env;

// Imports
const express = require("express");

// Creating express server
const app = express();

// On server run
app.listen(PORT,
    ()=>console.log(`Listening on port ${PORT}`)
);
