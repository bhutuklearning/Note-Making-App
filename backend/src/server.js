import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 10000;

// middlewares
app.use(express.json()); // this middleware will parse JSON bodies
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Request Method is ${req.method} and Request URL: ${req.url}`);
//     next();
// })

//Router Endpoint is URL + HTTP
app.use("/api/notes", noteRoutes);


// home route
app.get("/", (req, res, next) => {
    res.send("You are at the home page.");
})

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`Server is running on port number: ${PORT}.`)
    });
});
