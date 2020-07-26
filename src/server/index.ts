// Environment variables
import path from 'path'
require("dotenv");
const PORT = process.env.PORT || 3000;

// Imports
import express, {Application, Request, Response} from 'express';

// Creating express server
const app: Application = express();


// On server run
app.listen(PORT,
    ()=>console.log(`Listening on port ${PORT}`)
);

// Routes
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"))
})