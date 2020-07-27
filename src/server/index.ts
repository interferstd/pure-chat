// Environment variables
require("dotenv");
const PORT = process.env.PORT || 3000;

// Imports
import express, {Application, Request, Response} from 'express';
import path from "path";
import rootPath from './path';

// Creating express server
const app: Application = express();

// Static
app.use(express.static('dist'));

// On server run
app.listen(PORT,
    ()=>console.log(`Listening on port ${PORT}`)
);

// Routes
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve( rootPath, "/dist/index.html"))
})