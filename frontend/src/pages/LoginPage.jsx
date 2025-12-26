import { Link2Icon } from "lucide-react";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    //link to backend
    const AUTH_API_URL = import.meta.env.VITE_API_URL;
    window.location.href = `${AUTH_API_URL}/api/auth/google`; //vite env must start with VITE_
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">
        <img
          src="./kaotes.png"
          alt="KA Notes"
          className="h-8 w-auto object-contain mr-4"
        />
        <div className="animate-[wiggle_1s_ease-in-out_infinite]">
          <span className="bg-green-600/20 text-blue-400 px-4 py-1 rounded-full border border-blue-500/30 text-sm font-medium">
            KAotes
          </span>
        </div>
      </h1>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Continue with Google
      </button>
      <Link2Icon />
    </div>
  );
};

export default LoginPage;
