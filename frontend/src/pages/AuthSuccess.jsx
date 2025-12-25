import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token); // Save the "ID card"
      navigate("/"); // Send them to the home/notes page
    } else {
      navigate("/login"); // Something went wrong
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <p>Authenticating... Please wait.</p>
    </div>
  );
};

export default AuthSuccess;