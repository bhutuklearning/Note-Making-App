import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);


export default router;

// // route
// app.get("/api/notes", (req, res, next) => {
//     res.status(200).send("You are at /api/notes route.");
// });

// // Post
// app.post("/api/notes", (req, res, next) => {
//     res.status(201).json({
//         message: "Post created successfully."
//     });
// });

// // Update
// app.put("/api/notes/:id", (req, res, next) => {
//     res.status(200).json({
//         message: "Post created successfully."
//     });
// });

// // Delete
// app.delete("/api/notes/:id", (req, res, next) => {
//     res.status(200).json({
//         message: "Post deleted successfully."
//     });
// });

