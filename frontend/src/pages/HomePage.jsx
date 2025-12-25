import { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import { LoaderIcon, ArrowUpDownIcon, ClockIcon, Trash2Icon, XIcon } from "lucide-react";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const sortedNotes = useMemo(() => {
    return [...notes].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [notes, sortOrder]);

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = async () => {
    if (!window.confirm(`Are you sure you want to permanently delete ${selectedIds.length} notes?`)) return;

    try {
      // API call to your backend bulk-delete endpoint
      await api.post("/notes/bulk-delete", { ids: selectedIds });

      setNotes(notes.filter(n => !selectedIds.includes(n._id)));
      setSelectedIds([]);
      toast.success(`${selectedIds.length} notes purged from system`);
    } catch (error) {
      console.error("Bulk delete error", error);
      toast.error("System failed to delete selected entries");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00FF9D]/30">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9D]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      {isRateLimited && (
        <div className="relative z-10 max-w-4xl mx-auto mt-10 px-4">
          <RateLimitedUI />
        </div>
      )}

      <main className="relative z-10 max-w-7xl mx-auto p-6 mt-4">
        {/* Header Section */}
        {!isRateLimited && (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-white/5 pb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Neural_Vault_01</h1>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                {notes.length} total entries found
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* --- BULK ACTIONS UI --- */}
              {selectedIds.length > 0 && (
                <div className="flex items-center gap-3 bg-[#00FF9D]/10 border border-[#00FF9D]/30 p-1.5 pl-4 pr-2 rounded-2xl animate-in fade-in zoom-in duration-300">
                  <span className="text-[#00FF9D] font-mono text-[10px] font-bold uppercase tracking-tighter">
                    {selectedIds.length} Selected
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={handleBulkDelete}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      title="Delete Selected"
                    >
                      <Trash2Icon size={14} />
                    </button>
                    <button
                      onClick={() => setSelectedIds([])}
                      className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-all"
                      title="Cancel Selection"
                    >
                      <XIcon size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Sorting Controls */}
              <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <button
                  onClick={() => setSortOrder("newest")}
                  className={`px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                    sortOrder === "newest"
                      ? "bg-[#00FF9D] text-black shadow-[0_0_15px_rgba(0,255,157,0.3)]"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ClockIcon size={12} />
                  Newest
                </button>
                <button
                  onClick={() => setSortOrder("oldest")}
                  className={`px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                    sortOrder === "oldest"
                      ? "bg-[#00FF9D] text-black shadow-[0_0_15px_rgba(0,255,157,0.3)]"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ArrowUpDownIcon size={12} />
                  Oldest
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <LoaderIcon className="animate-spin size-8 text-[#00FF9D]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Decrypting Notes...
            </p>
          </div>
        )}

        {/* Empty State */}
        {notes.length === 0 && !loading && !isRateLimited && (
          <div className="py-20">
            <NotesNotFound />
          </div>
        )}

        {/* Notes Grid */}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNotes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes}
                isSelected={selectedIds.includes(note._id)}
                onSelect={toggleSelect}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;