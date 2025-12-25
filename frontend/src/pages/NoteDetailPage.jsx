import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon, SaveIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <LoaderIcon className="animate-spin size-10 text-[#00FF9D]" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00FF9D]/60">Fetching Data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF9D] transition-colors group"
          >
            <ArrowLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Return to Grid</span>
          </Link>
          
          <button 
            onClick={handleDelete} 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-mono text-xs uppercase font-bold"
          >
            <Trash2Icon className="size-4" />
            Delete Entry
          </button>
        </div>

        {/* GLASS CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00FF9D]/5 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <div className="space-y-6">
              {/* Title Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-mono text-[10px] uppercase tracking-[0.2em]">Record Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xl font-bold focus:outline-none focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] transition-all text-white"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              {/* Content Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-mono text-[10px] uppercase tracking-[0.2em]">Detailed logs</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-64 focus:outline-none focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] transition-all text-white placeholder:text-gray-600 resize-none leading-relaxed"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              {/* SAVE BUTTON */}
              <div className="flex justify-end pt-4">
                <button 
                  onClick={handleSave} 
                  disabled={saving}
                  className={`
                    flex items-center gap-2 px-10 py-4 rounded-2xl font-black transition-all duration-300
                    ${saving 
                      ? "bg-gray-800 text-gray-500" 
                      : "bg-[#00FF9D] text-black hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] hover:scale-[1.02]"
                    }
                  `}
                >
                  <SaveIcon className={`size-5 ${saving ? "animate-pulse" : ""}`} />
                  {saving ? "UPLOADING..." : "UPDATE DATABASE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;