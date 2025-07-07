import Notes from "../models/Notes.js";

export async function getAllNotes(req, res, next) {
    try {
        const allNotes = await Notes.find().sort({ createdAt: -1 }); // -1: reverse sorting
        res.status(200).json(allNotes);
    } catch (error) {
        console.log("Get All Notes error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export async function getNoteById(req, res, next) {
    try {
        const notebyId = await Notes.findById(req.params.id);
        if (!notebyId) {
            res.status(404).json({ message: "Note not found." })
        }

        res.status(200).json(notebyId);
    }
    catch (error) {
        console.log("Get Notes by Id error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createNote(req, res, next) {

    try {
        const { title, content } = req.body;
        const newNote = new Notes({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Create a Note error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export async function updateNote(req, res, next) {
    try {
        const { title, content } = req.body;
        const updateNote = await Notes.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updateNote) {
            res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note Updated Successfully" });

    } catch (error) {
        console.log("Updates Notes error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export async function deleteNote(req, res, next) {
    try {
        const deleteNote = await Notes.findByIdAndDelete(req.params.id);
        if (!deleteNote) {
            res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note Deleted Successfully" });

    } catch (error) {
        console.log("Delete Notes error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};