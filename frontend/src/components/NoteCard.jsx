import React from "react";
import { Link } from "react-router";
import {
  PenSquareIcon,
  Trash2Icon,
  TerminalIcon,
  CheckIcon,
} from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios"
import toast from "react-hot-toast"

const NoteCard = ({ note, isSelected, onSelect, setNotes }) => {
  const handleDelete = async (e) => {
  e.preventDefault(); // Stops navigation to details page
  e.stopPropagation(); // Stops the click from bubbling up

  if (!window.confirm("Are you sure you want to delete this note?")) return;

  try {
    // FIX: Changed 'id' to 'note._id'
    await api.delete(`/notes/${note._id}`); 
    
    // Update the UI state
    setNotes((prev) => prev.filter((n) => n._id !== note._id));
    
    toast.success("Note purged from system");
  } catch (error) {
    console.error("Error deleting the note:", error);
    toast.error("Failed to delete note");
  }
};
  return (
    <div className="relative group h-64">
      {/* 1. Styled Cyber Checkbox */}
      <div className="absolute top-6 left-6 z-30">
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => {
              e.stopPropagation(); // Prevents the Link from firing
              onSelect(note._id);
            }}
            className="peer appearance-none size-5 border border-white/20 rounded-md bg-white/5 checked:bg-[#00FF9D] checked:border-[#00FF9D] transition-all duration-300"
          />
          {/* Checkmark Icon (Visible only when peer is checked) */}
          <CheckIcon
            size={14}
            className="absolute left-0.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
          />
        </label>
      </div>

      {/* 2. The Main Card Link */}
      <Link
        to={`note/${note._id}`}
        className={`relative block h-full border rounded-3xl backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isSelected
            ? "bg-[#00FF9D]/10 border-[#00FF9D] shadow-[0_0_25px_rgba(0,255,157,0.15)]"
            : "bg-white/5 border-white/10 group-hover:border-[#00FF9D]/50"
        }`}
      >
        {/* Top Neon Light Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-1 shadow-[0_0_10px_#00FF9D] transition-colors ${
            isSelected
              ? "bg-[#00FF9D]"
              : "bg-transparent group-hover:bg-[#00FF9D]/50"
          }`}
        ></div>

        <div className="p-6 h-full flex flex-col">
          {/* Header - Pushed right to make room for checkbox */}
          <div className="flex items-center justify-end mb-4">
            <div className="flex items-center gap-2">
              <TerminalIcon
                size={14}
                className={isSelected ? "text-[#00FF9D]" : "text-gray-500"}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                LOG_{note._id.slice(-4)}
              </span>
            </div>
          </div>

          {/* Title and Content */}
          <div className="flex-1">
            <h3
              className={`text-lg font-bold transition-colors mb-2 line-clamp-1 ${
                isSelected
                  ? "text-[#00FF9D]"
                  : "text-white group-hover:text-[#00FF9D]"
              }`}
            >
              {note.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
              {note.content}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-gray-500 uppercase">
              {formatDate(new Date(note.createdAt))}
            </span>

            <div className="flex items-center gap-2">
              <PenSquareIcon
                className={`size-4 transition-colors ${
                  isSelected
                    ? "text-[#00FF9D]"
                    : "text-gray-500 hover:text-white"
                }`}
              />
              <button
                onClick={handleDelete}
                className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
