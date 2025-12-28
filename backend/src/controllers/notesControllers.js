import Note from "../models/Note.js";

// 1. Get ONLY the notes for the logged-in user
export async function getAllNotes(req, res) {
  try {
    // Filter by the user ID attached by the middleware
    const notes = await Note.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// 2. Attach the user ID to the new note
export async function addNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
      user: req.user.id, // Associate note with current user
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in addNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// 3. Ensure the user owns the note before updating
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    // Find note by ID AND ensure the 'user' field matches the current user
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// 4. Ensure the user owns the note before deleting
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedNote) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in deleteNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// 5. Ensure user owns the note before viewing detail
export async function getNoteById(req, res) {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.id });

    if (!note) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function bulkDelete(req, res) {
  {
    try {
      const { ids } = req.body; // This is the [id1, id2, ...] array from your frontend

      if (!ids || !Array.isArray(ids)) {
        return res.status(400).json({ message: "Invalid IDs provided" });
      }

      // IMPORTANT: Ensure users can only delete THEIR OWN notes
      // We filter by ID AND by the user ID from the auth middleware
      const result = await Note.deleteMany({
        _id: { $in: ids },
        user: req.user.id, // Match the field name used in your other functions
      });
      res.status(200).json({
        message: "Notes deleted successfully",
        deletedCount: result.deletedCount,
      });
    } catch (error) {
      console.error("Bulk Delete Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
