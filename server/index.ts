// Environment variables
require("dotenv").config();
const {PORT} = process.env;

// Imports
//const express = require("express");
import express, {Application, Request, Response} from 'express';

// Creating express server
const app: Application = express();

// On server run
app.listen(PORT,
    ()=>console.log(`Listening on port ${PORT}`)
);

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>залуподрищенск</h1>")
})