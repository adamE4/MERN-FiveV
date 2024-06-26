import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import postsRoutes from "./routes/Postsroutes.js"
import dotenv from "dotenv"
//Going to use this to import routes


const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI;


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
//used to sue the imported things

//routes
app.use('/posts', postsRoutes)

//Used to start the express server
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});