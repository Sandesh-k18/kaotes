import React from "react";
import { Link } from "react-router";
import {
  Cpu,
  ShieldCheck,
  Globe,
  Zap,
  Github,
  ExternalLink,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020F0C] text-emerald-50 relative font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none z-0" />

      <main className="flex-grow relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* --- HEADER --- */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white via-emerald-100 to-emerald-900/40 bg-clip-text text-transparent tracking-tighter">
            SYSTEM // ORIGIN
          </h1>
          <p className="font-mono text-emerald-400/60 uppercase tracking-[0.3em] text-xs">
            Architecture of the KAOTES Neural Vault
          </p>
        </header>

        {/* --- CORE MISSION --- */}
        <section className="space-y-12 font-mono text-sm leading-relaxed text-emerald-100/70">
          <div className="p-8 border border-emerald-500/10 bg-emerald-950/5 rounded-3xl backdrop-blur-sm">
            <h2 className="text-emerald-400 mb-4 flex items-center gap-2 font-bold tracking-widest">
              <Cpu size={18} /> [ THE MISSION ]
            </h2>
            <p>
              KAOTES was engineered to bridge the gap between rapid thought
              capture and distributed security. In an era of data volatility, we
              provide a static-point for your intellectual property—a "Neural
              Vault" that lives at the edge of the network.
            </p>
          </div>

          {/* --- TECH SPECS GRID --- */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-emerald-500/5 rounded-2xl bg-emerald-500/5">
              <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <ShieldCheck size={14} /> [ SECURITY_FIRST ]
              </h3>
              <p className="text-[13px]">
                Utilizing MERN-stack architecture and Redis-backed rate
                limiting, every note is treated as a secure node within the
                cluster.
              </p>
            </div>
            <div className="p-6 border border-emerald-500/5 rounded-2xl bg-emerald-500/5">
              <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap size={14} /> [ ECO_SYSTEM ]
              </h3>
              <p className="text-[13px]">
                Our interface is optimized for low-eye-strain, long-form
                archival sessions, maintaining a high-fidelity forest aesthetic.
              </p>
            </div>
          </div>

          {/* --- SYSTEM AUTHORITIES (NEW SECTION) --- */}
          <div className="pt-12 border-t border-emerald-500/10">
            <h2 className="text-emerald-400/40 text-[10px] uppercase tracking-[0.4em] mb-8 text-center font-bold">
              // System_Authorities
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://sandeshkharel.com.np"
                target="_blank"
                rel="noreferrer"
                className="group p-6 border border-emerald-500/10 rounded-2xl flex items-center justify-between hover:bg-emerald-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-500/50 uppercase tracking-tighter">
                      Mainframe_Domain
                    </p>
                    <p className="text-sm font-bold tracking-tight">
                      sandeshkharel.com.np
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity"
                />
              </a>

              <a
                href="https://github.com/Sandesh-k18/kaotes"
                target="_blank"
                rel="noreferrer"
                className="group p-6 border border-emerald-500/10 rounded-2xl flex items-center justify-between hover:bg-emerald-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-500/50 uppercase tracking-tighter">
                      Source_Protocol
                    </p>
                    <p className="text-sm font-bold tracking-tight">
                      Github Repository
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity"
                />
              </a>
            </div>
          </div>
        </section>

        {/* --- NAVIGATION FOOTER --- */}
        <div className="mt-24 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-500/40 hover:text-emerald-400 transition-all text-[10px] uppercase tracking-[0.5em] group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              {"<"} Return_to_Mainframe {"/ >"}
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
