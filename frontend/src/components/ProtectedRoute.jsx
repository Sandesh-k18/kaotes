import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <Navigate replace to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;