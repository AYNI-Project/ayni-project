import { useAuth } from "../../context/useAuth";
import { Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function ProtectedRouteAdmin({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: "center" }}>
        <CircularProgress />
        <Typography sx={{ fontFamily: "Poppins", color: "#FFA37F" }}> Cargando...</Typography>;
      </Box>)

  if (!user)
    return <Navigate to="/users/login"></Navigate>;

  return <>{children}</>;
}