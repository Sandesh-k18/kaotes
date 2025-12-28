import React from "react";
import { Link } from "react-router"; // Use react-router-dom
import { Shield, TreePine, Zap, Lock, Cpu, Globe, ArrowRight, Fingerprint } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020F0C] text-emerald-50 selection:bg-emerald-500/30 overflow-x-hidden relative font-sans">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* Static Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- NAVIGATION / TOP BAR --- */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/kaotes.webp" alt="Logo" className="h-8 w-auto drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-mono font-bold tracking-tighter text-xl uppercase">KA<span className="text-emerald-400">OTES</span></span>
        </div>
        <Link to="/login" className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-500/60 hover:text-emerald-400 transition-colors border-b border-emerald-500/20 pb-1">
          [ Request_Access ]
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative max-w-6xl mx-auto pt-20 pb-32 px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-10 backdrop-blur-md">
          <Fingerprint size={14} className="text-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-400/80">
            Biometric Protocol Active // Secure_Archive_v1.0
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-b from-white via-emerald-100 to-emerald-900/40 bg-clip-text text-transparent leading-[0.9] tracking-tighter">
          NEURAL <br /> KNOWLEDGE
        </h1>

        <p className="text-emerald-500/50 text-base md:text-lg max-w-xl mx-auto mb-14 font-mono leading-relaxed tracking-tight">
          A high-fidelity digital vault for your intellectual property. 
          Encrypted via distributed MERN logic and protected by edge-level Redis security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            to="/dashboard"
            className="group relative px-12 py-5 bg-emerald-500 text-black font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-2 uppercase tracking-tighter">
              Access the Vault <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <a
            href="#features"
            className="group text-emerald-500/40 hover:text-emerald-400 font-mono text-[11px] transition-colors flex items-center gap-2 tracking-[0.2em]"
          >
            <Cpu size={14} className="group-hover:rotate-90 transition-transform duration-500" /> [ DECODE_PROTOCOLS ]
          </a>
        </div>
      </header>

      {/* --- FEATURE GRID --- */}
      <section id="features" className="relative max-w-7xl mx-auto py-32 px-6 z-10 border-t border-emerald-500/5">
        <div className="grid md:grid-cols-3 gap-10">
          
          <FeatureCard 
            icon={<Lock size={24} />}
            title="01 // SECURITY"
            desc="Distributed rate-limiting via Upstash prevents unauthorized brute-force attempts at the neural edge."
          />

          <FeatureCard 
            icon={<TreePine size={24} />}
            title="02 // ECO_SYSTEM"
            desc="A low-eye-strain environment designed for long-form writing and deep intellectual archival sessions."
          />

          <FeatureCard 
            icon={<Zap size={24} />}
            title="03 // SYNC_SPEED"
            desc="Real-time synchronization ensures your knowledge segments are updated across all neural links instantly."
          />

        </div>
      </section>

{/* --- FOOTER --- */}
      <footer className="relative mt-20 border-t border-emerald-500/10 bg-[#010a08] overflow-hidden">
        {/* Subtle radial glow to make footer text pop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6 col-span-1 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <img src="/kaotes.webp" width="20" height="20" alt="Icon" className="brightness-125 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                </div>
                <span className="font-mono text-xs font-bold text-emerald-100 uppercase tracking-[0.5em]">
                  Neural_Archiving // KAOTES
                </span>
              </div>
              <p className="text-[10px] font-mono text-emerald-500/40 uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                A distributed cryptographic vault engineered for high-fidelity 
                knowledge storage. Developed under the MERN-Stack protocol 
                with edge-level security integrations.
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.3em] mb-6">System_Nodes</h4>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-emerald-500/30">
                <li><a href="https://github.com/Sandesh-k18/kaotes" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">01</span> [ Source_Archive ]</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">02</span> [ Documentation ]</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">03</span> [ System_Logs ]</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.3em] mb-6">Legal_Protocols</h4>
              <ul className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-emerald-500/30">
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">04</span> [ Privacy_Shield ]</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">05</span> [ Terms_of_Entry ]</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"> <span className="text-emerald-500/10">06</span> [ Security_Faq ]</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-emerald-500/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-[9px] font-mono text-emerald-500/20 uppercase tracking-[0.3em]">
              <span>Latency: 24ms</span>
              <span>Status: Encrypted</span>
              <span className="text-emerald-500/40">© 2025 Sandesh-k18</span>
            </div>
            <div className="flex gap-4">
               <div className="w-2 h-2 rounded-full bg-emerald-500/20 animate-pulse" />
               <div className="w-2 h-2 rounded-full bg-blue-500/20" />
               <div className="w-2 h-2 rounded-full bg-emerald-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Feature Card Component for consistency
const FeatureCard = ({ icon, title, desc }) => (
  <div className="group p-10 rounded-3xl border border-emerald-500/5 bg-emerald-950/10 backdrop-blur-2xl hover:border-emerald-500/20 transition-all duration-500">
    <div className="text-emerald-500/40 group-hover:text-emerald-400 mb-8 transition-colors transform group-hover:scale-110 duration-500">
      {icon}
    </div>
    <h2 className="text-xs font-bold mb-5 text-emerald-400 uppercase tracking-[0.3em] font-mono">
      {title}
    </h2>
    <p className="text-emerald-500/40 text-sm leading-relaxed font-mono tracking-tighter group-hover:text-emerald-100/60 transition-colors">
      {desc}
    </p>
  </div>
);

export default LandingPage;