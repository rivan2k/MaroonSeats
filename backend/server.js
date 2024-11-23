import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js'
import ticketRoutes from "./routes/ticket.js"
import eventRoutes from "./routes/events.js";
import cors from 'cors';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
}));


app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);


// console.log(process.env.MONGO_URI);

app.listen(PORT, () =>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


