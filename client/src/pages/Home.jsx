import { useAuth } from "../context/useAuth";
import { useEffect } from 'react';
import Appbar from "../components/appbar";
import Banner from "../components/banner/Banner";
import Promotions from "../components/promotions";
import Products from "../components/products";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Ayni-Home"
  }, []);

  if (loading) return <h1>Cargando...</h1>;

  return (

    <div>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Appbar />
        <div>
          <h1>
            Hola, {user.displayName || user.email}{" "}
          </h1>
          <button
            onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}><Typography variant="h4"> ¿Qué quieres intercambiar? </Typography></Box>
        <Products />
      </Container>
    </div>
  );
}
