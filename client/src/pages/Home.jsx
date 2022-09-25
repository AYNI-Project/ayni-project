import { useEffect } from 'react';
import Appbar from "../components/appbar";
import Banner from "../components/banner/Banner";
import Promotions from "../components/promotions";
import Products from "../components/products";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {

  useEffect(() => {
    document.title = "Ayni-Home"
  }, []);

  return (

    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Appbar />
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}><Typography variant="h4"> ¿Qué quieres intercambiar? </Typography></Box>
      <Products />
    </Container>
  );
}
