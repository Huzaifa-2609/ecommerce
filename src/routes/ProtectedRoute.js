import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading) return <Loader />;
  if (!isAuthenticated) {
    toast("Login to continue");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
