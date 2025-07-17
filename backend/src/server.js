// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import noteRoutes from "./routes/notesRoutes.js";
// import { connectDB } from "./config/db.js";
// import rateLimiter from "./middlewares/rateLimiter.js";
// import path from "path";



// const app = express();
// dotenv.config();
// const PORT = process.env.PORT || 10000;
// const __dirname = path.resolve();

// // middlewares
// app.use(express.json()); // this middleware will parse JSON bodies

// if (process.env.NODE_ENV !== "production") {
//     app.use(cors({
//         origin: "http://localhost:5173"
//     }));
// }

// app.use(rateLimiter);

// // app.use((req, res, next) => {
// //     console.log(`Request Method is ${req.method} and Request URL: ${req.url}`);
// //     next();
// // })

// //Router Endpoint is URL + HTTP
// app.use("/api/notes", noteRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     });
// }


// // home route
// // app.get("/", (req, res, next) => {
// //     res.send("You are at the home page.");
// // })

// connectDB().then(() => {
//     app.listen(PORT, (req, res) => {
//         console.log(`Server is running on port number: ${PORT}.`)
//     });
// });






import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 12000;

const __dirname = path.resolve();

// middleware
// if (process.env.NODE_ENV !== "production") {

// }

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });
app.get('/health', (req, res) => {
  res.send('OK');
});


app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    // });
    app.get('/health', (req, res) => {
        res.send('OK');
    });

}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});