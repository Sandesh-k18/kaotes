import React from "react";
import { ShieldCheck, Fingerprint, Globe } from "lucide-react";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    const AUTH_API_URL = import.meta.env.VITE_API_URL;
    window.location.href = `${AUTH_API_URL}/api/auth/google`;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#020F0C] text-emerald-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="flex flex-col items-center mb-10">
          {/* Logo Area */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />
            <img
              src="/kaotes.webp"
              alt="KA Notes"
              className="relative h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white font-mono italic">
              KA<span className="text-emerald-400">OTES</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-500/40 font-mono">
              Neural Connectivity Required
            </p>
          </div>
        </div>

        {/* Action Area */}
        <div className="space-y-6">
          <button
            onClick={handleGoogleLogin}
            className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-950/30 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Scanning Line Effect */}
            <div className="absolute inset-0 w-full h-[2px] bg-emerald-400/20 -translate-y-10 group-hover:animate-scan pointer-events-none" />

            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-mono text-sm font-bold tracking-widest uppercase text-emerald-100">
              Initialize_Auth
            </span>
          </button>

          <div className="flex items-center justify-center gap-6 pt-4 text-emerald-500/20">
            <ShieldCheck
              size={20}
              className="hover:text-emerald-400/40 transition-colors"
            />
            <Fingerprint
              size={20}
              className="hover:text-emerald-400/40 transition-colors"
            />
            <Globe
              size={20}
              className="hover:text-emerald-400/40 transition-colors"
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-[9px] font-mono text-emerald-500/30 uppercase tracking-[0.2em] leading-relaxed">
            Secure distributed notes via MERN protocol <br />
            Node: {window.location.hostname}
          </p>
        </div>
      </div>

      {/* Tailwind Custom Animation for the scan effect */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(50px);
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
