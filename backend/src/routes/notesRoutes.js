import express from "express";
import {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
  getNoteById,
  bulkDelete
} from "../controllers/notesControllers.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(protect);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.post("/bulk-delete", bulkDelete);
export default router;
