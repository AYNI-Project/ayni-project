import { useAuth } from "../../context/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!user) return <Navigate to="/login"></Navigate>;

  return <>{children}</>;
}