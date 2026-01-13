import { Link } from "react-router";
import { PlusIcon, User, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* LOGO SECTION */}
          <div className="flex-shrink-0">
            <Link to={"/"} className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00FF9D]/20 blur-md rounded-lg group-hover:bg-[#00FF9D]/40 transition-all"></div>
                <img
                  src="./kaotes.webp"
                  alt="KA Notes"
                  className="h-8 w-[70px] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="hidden sm:block ml-3 font-mono font-black text-xl tracking-tighter text-white">
                KA<span className="text-[#00FF9D]">otes</span>
              </span>
            </Link>
          </div>

          {/* MIDDLE BANNER (Status Bar Style) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-white/5 border border-white/10 shadow-inner
                animate-pulse"
            >
              <Zap size={14} className="text-[#00FF9D]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                System Online: <span className="text-white">Ready to Sync</span>
              </span>
            </div>
          </div>

          {/* ACTIONS SECTION */}
          <div className="flex items-center gap-3">
            {/* Create Button */}
            <Link
              to={"/dashboard/create"}
              className="flex items-center gap-2 bg-[#00FF9D] text-black px-4 py-2 rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all active:scale-95"
            >
              <PlusIcon className="size-4 stroke-[3px]" />
              <span className="xs:block">New Note</span>
            </Link>

            {/* Profile Button - Glass Style */}
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#00FF9D]/50 transition-all duration-300 group"
            >
              <div className="relative">
                <User className="size-5 text-gray-400 group-hover:text-[#00FF9D] transition-colors" />
                {/* Small green dot to signify 'logged in' */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF9D] rounded-full border border-black animate-pulse"></span>
              </div>
              <span className="hidden md:inline font-mono text-xs uppercase tracking-widest">
                User_01
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
