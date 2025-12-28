import React from "react";
import { Link } from "react-router";
import { MoveLeft, Terminal, AlertTriangle, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#020F0C] text-emerald-50 flex flex-col items-center justify-center relative font-sans overflow-hidden px-6">
      {/* --- VOID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* --- ERROR CONTENT --- */}
      <div className="relative z-10 text-center">
        {/* Animated Error Code */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-emerald-500/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <AlertTriangle
                size={48}
                className="text-emerald-400 mx-auto animate-bounce"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-emerald-400">
                Fragment_Not_Found
              </p>
            </div>
          </div>
        </div>

        {/* System Message */}
        <div className="max-w-md mx-auto mb-12 space-y-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center justify-center gap-3">
            <Terminal size={20} className="text-emerald-500" /> Connection
            Terminated
          </h2>
          <p className="font-mono text-xs text-emerald-100/40 leading-relaxed uppercase tracking-widest">
            The neural coordinate you are attempting to access has been
            de-indexed or moved to a restricted sector.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <MoveLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            BACK TO MAINFRAME
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 border border-emerald-500/20 rounded-xl font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-500/5 transition-colors flex items-center gap-2"
          >
            <Search size={14} /> Re-Scan Frequency
          </button>
        </div>
      </div>

      {/* --- DECORATIVE SYSTEM LOGS --- */}
      <div className="absolute bottom-10 left-10 hidden lg:block font-mono text-[9px] text-emerald-500/20 space-y-1 uppercase tracking-widest">
        <p>{">"} Initializing scan...</p>
        <p>{">"} Sector 0x404 not found</p>
        <p>{">"} Memory leak detected in /dev/null</p>
        <p className="text-emerald-500/40">{">"} Critical: Logic sequence broken</p>
      </div>

      <div className="absolute top-10 right-10 hidden lg:block font-mono text-[9px] text-emerald-500/20 text-right uppercase tracking-widest">
        <p>UUID: ERR_VOYAGER_LOST</p>
        <p>Status: Disconnected</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
