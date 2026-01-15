import { useEffect, useState } from "react";
import api from "../lib/axios";
import { useNavigate } from "react-router";
import { User, LogOut, Mail, ShieldCheck } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false); // New state to track image loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error("Profile fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6">
        <div className="flex h-[80vh] items-center justify-center">
          <div className="animate-pulse text-[#00FF9D] font-mono">
            Loading profile...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-black">
      <div className="relative h-full w-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center">
            
            {/* Avatar Section */}
            <div className="relative mb-6">
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-[#00FF9D]/20 blur-xl rounded-full"></div>
              
              {/* 1. Placeholder ICON (Shown if img is loading OR if user has no image) */}
              {(!imgLoaded || !user?.image) && (
                <div className="relative z-20 w-24 h-24 bg-neutral-900 rounded-full border-2 border-[#00FF9D] flex items-center justify-center">
                  <User size={40} className="text-[#00FF9D]" />
                </div>
              )}

              {/* 2. Actual GOOGLE IMAGE (Hidden until fully loaded) */}
              {user?.image && (
                <img
                  src={user.image}
                  alt="Profile"
                  onLoad={() => setImgLoaded(true)}
                  className={`relative z-20 w-24 h-24 rounded-full border-2 border-[#00FF9D] object-cover shadow-[0_0_15px_rgba(0,255,157,0.3)] ${
                    imgLoaded ? "block" : "absolute top-0 left-0 invisible"
                  }`}
                />
              )}

              {/* Verification Badge */}
              <div className="absolute z-30 bottom-0 right-0 bg-[#00FF9D] p-1.5 rounded-full border-2 border-black">
                <ShieldCheck size={14} className="text-black" />
              </div>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-bold text-white mb-1">
              {user?.displayName || "Anonymous User"}
            </h2>
            <div className="flex items-center gap-2 text-gray-400 mb-8">
              <Mail size={14} />
              <span className="text-sm">{user?.email}</span>
            </div>

            {/* Stats Section */}
            <div className="w-full grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
                <p className="text-[#00FF9D] text-sm font-medium">Verified</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account</p>
                <p className="text-white text-sm font-medium">Free Tier</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-3">
              <button
                onClick={handleLogout}
                className="w-full py-3.5 flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-2xl font-bold transition-all duration-300 group shadow-lg shadow-red-500/10"
              >
                <LogOut
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Log Out
              </button>
              
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full py-3 text-sm text-gray-500 hover:text-[#00FF9D] transition-colors font-mono"
              >
                &lt; Back to Notes /&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;