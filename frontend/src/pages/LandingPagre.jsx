import React from "react";
import { Link } from "react-router";
import {
  Shield,
  TreePine,
  Zap,
  Lock,
  Cpu,
  ArrowRight,
  Fingerprint,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react";

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  // We check if a token exists in localStorage to determine the destination.
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen flex flex-col bg-[#020F0C] text-emerald-50 selection:bg-emerald-500/30 relative font-sans overflow-x-hidden">
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="flex-grow relative z-10">
        {/* --- NAVIGATION --- */}
        <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/kaotes.webp"
              alt="KAotes Logo"
              className="h-8 w-[70px] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-mono font-bold tracking-tighter text-xl uppercase">
              KA<span className="text-emerald-400">OTES</span>
            </span>
          </Link>

          <Link
            to="/login"
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400/80 hover:text-emerald-300 transition-colors border-b border-emerald-500/20 pb-1"
          >
            [ Request_New_Access ]
          </Link>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="max-w-6xl mx-auto pt-20 pb-32 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-10 backdrop-blur-md">
            <Fingerprint size={14} className="text-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-400">
              Biometric Protocol Active // Secure_Archive_v1.0
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-b from-white via-emerald-100 to-emerald-900/40 bg-clip-text text-transparent leading-[0.9] tracking-tighter">
            NEURAL <br /> KNOWLEDGE
          </h1>

          <p className="text-emerald-400/70 text-base md:text-lg max-w-xl mx-auto mb-14 font-mono leading-relaxed tracking-tight">
            A high-fidelity digital vault for your intellectual property.
            Encrypted via distributed MERN logic and protected by edge-level
            Redis security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* CORRECTED LAPSE: Smart Redirect Link */}
            <Link
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="group relative px-12 py-5 bg-emerald-500 text-black font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-2 uppercase tracking-tighter">
                {isAuthenticated ? "Access the Vault" : "Authenticate Access"}{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href="#features"
              className="group text-emerald-400/60 hover:text-emerald-400 font-mono text-[11px] transition-colors flex items-center gap-2 tracking-[0.2em]"
            >
              <Cpu
                size={14}
                className="group-hover:rotate-90 transition-transform duration-500"
              />{" "}
              [ DECODE_PROTOCOLS ]
            </a>
          </div>
        </header>

        {/* --- FEATURE GRID --- */}
        <section
          id="features"
          className="max-w-7xl mx-auto py-32 px-6 border-t border-emerald-500/10"
        >
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Lock size={24} />}
              title="01 // SECURITY"
              desc="Distributed rate-limiting via Upstash prevents unauthorized brute-force attempts."
            />
            <FeatureCard
              icon={<TreePine size={24} />}
              title="02 // ECO_SYSTEM"
              desc="A low-eye-strain environment designed for long-form writing and archival sessions."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="03 // SYNC_SPEED"
              desc="Real-time synchronization ensures knowledge segments are updated instantly."
            />
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative border-t border-emerald-500/20 bg-[#010a08] overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-[0_0_10px_rgba(52,211,153,0.5)]" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6 col-span-1 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                  <img
                    src="/kaotes.webp"
                    width="24"
                    height="24"
                    alt="Icon"
                    className="brightness-150 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]"
                  />
                </div>
                <span className="font-mono text-sm font-bold text-emerald-100 uppercase tracking-[0.4em]">
                  Neural_Vault // KAOTES
                </span>
              </div>
              <p className="text-[11px] font-mono text-emerald-400/60 uppercase tracking-[0.15em] leading-relaxed max-w-sm">
                A distributed cryptographic vault engineered for high-fidelity
                knowledge storage.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em]">
                System_Nodes
              </h4>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-100/70">
                <li>
                  <a
                    href="https://sandeshkharel.com.np"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 transition-all flex items-center gap-2 group"
                  >
                    <Globe
                      size={12}
                      className="text-emerald-500/30 group-hover:text-emerald-400"
                    />
                    [ MainDomain ]
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sandesh-k18/kaotes"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 transition-all flex items-center gap-2 group"
                  >
                    <Github
                      size={12}
                      className="text-emerald-500/30 group-hover:text-emerald-400"
                    />
                    [ Repository ]
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em]">
                Protocols
              </h4>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-100/70">
                <li>
                  <Link
                    to="/legal"
                    className="hover:text-emerald-300 transition-all flex items-center gap-2 group"
                  >
                    <span className="text-emerald-500/30 group-hover:text-emerald-400">
                      01
                    </span>
                    [ Privacy & Terms ]
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-emerald-300 transition-all flex items-center gap-2 group"
                  >
                    <span className="text-emerald-500/30 group-hover:text-emerald-400">
                      02
                    </span>
                    [ About System ]
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-500/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-emerald-400/40 uppercase tracking-[0.3em]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />{" "}
                Latency: 24ms
              </span>
              <span>
                Status: <span className="text-emerald-400">Encrypted</span>
              </span>
            </div>
            <span>
              <a
                className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] hover:text-emerald-300 transition-all flex items-center gap-2 group"
                href="https://github.com/Sandesh-k18"
                target="_blank"
                rel="noreferrer"
              >
                © {currentYear} sandesh-k18
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/10 backdrop-blur-2xl hover:border-emerald-400/30 transition-all duration-500">
    <div className="text-emerald-400/60 group-hover:text-emerald-400 mb-8 transition-colors transform group-hover:scale-110">
      {icon}
    </div>
    <h2 className="text-xs font-bold mb-5 text-emerald-400 uppercase tracking-[0.3em] font-mono">
      {title}
    </h2>
    <p className="text-emerald-100/60 text-sm leading-relaxed font-mono tracking-tighter group-hover:text-emerald-50/90 transition-colors">
      {desc}
    </p>
  </div>
);

export default LandingPage;
