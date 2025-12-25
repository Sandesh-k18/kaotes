import { ZapIcon, ShieldAlertIcon, ActivityIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative overflow-hidden bg-red-500/5 border border-red-500/20 rounded-[2.5rem] backdrop-blur-xl shadow-[0_0_40px_rgba(239,68,68,0.1)]">
        
        {/* Animated Background Pulse */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 animate-pulse"></div>

        <div className="flex flex-col md:flex-row items-center p-10 gap-8">
          {/* Icon Section with Hazard Glow */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative bg-black/40 border border-red-500/30 p-6 rounded-full">
              <ZapIcon className="size-12 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <ShieldAlertIcon className="absolute -top-1 -right-1 size-6 text-red-500 animate-bounce" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-2">
              <ActivityIcon size={12} className="text-red-500 animate-pulse" />
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.3em] font-bold">
                Status: Restricted
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
              Rate Limit <span className="text-red-500">Exceeded</span>
            </h3>

            <div className="space-y-2">
              <p className="text-gray-400 font-mono text-[11px] uppercase tracking-widest leading-relaxed">
                Firewall detected excessive request volume from this node. 
                Temporary lockdown initiated to protect neural integrity.
              </p>
              <p className="text-red-500/60 font-mono text-[10px] uppercase tracking-[0.2em] animate-pulse">
                &gt;&gt; Cooling down system... Try again in 60 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Bar */}
        <div className="h-1 w-full bg-white/5 flex">
            <div className="h-full bg-red-500 animate-[loading_10s_ease-in-out_infinite]" style={{ width: '30%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;