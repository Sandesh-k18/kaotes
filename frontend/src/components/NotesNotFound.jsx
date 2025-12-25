import React from "react";
import { Link } from "react-router";
import { NotebookIcon, TerminalIcon, SparklesIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-8 max-w-md mx-auto text-center animate-in fade-in zoom-in duration-700">
      {/* Visual Icon Container with Neon Glow */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#00FF9D]/20 blur-[40px] rounded-full group-hover:bg-[#00FF9D]/30 transition-all duration-500"></div>
        <div className="relative bg-white/5 border border-white/10 rounded-full p-10 backdrop-blur-md">
          <NotebookIcon className="size-12 text-[#00FF9D] drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" />

          {/* Small floating decorative icons */}
          <TerminalIcon className="absolute -top-2 -right-2 size-5 text-gray-600 animate-bounce" />
          <SparklesIcon className="absolute -bottom-1 -left-1 size-4 text-[#00FF9D]/40 animate-pulse" />
        </div>
      </div>

      <div className="space-y-3">
        {/* Terminal Style Header */}
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
          <span className="text-[#00FF9D] font-mono">&gt;</span> No Notes Found
        </h3>

        {/* Monospaced Body Text */}
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 leading-relaxed px-4">
          Neural path empty. System standby. No data entries found in the secure
          vault. Ready to initialize your first log?
        </p>
      </div>

      {/* Cyberpunk Button */}
      <Link
        to="/create"
        className="relative group px-8 py-3 bg-[#00FF9D]/5 border border-[#00FF9D]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00FF9D] hover:shadow-[0_0_25px_rgba(0,255,157,0.2)]"
      >
        {/* Hover background fill effect */}
        <div className="absolute inset-0 bg-[#00FF9D] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>

        <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF9D] group-hover:text-black font-bold transition-colors">
          + Create New Entry
        </span>
      </Link>
    </div>
  );
};

export default NotesNotFound;
