import { useEffect } from 'react';
import Appbar from "../components/appbar";
import Banner from "../components/banner/Banner";
import Slider from "../components/slider";
import Trades from "../pages/Trades";
// import Categories from "../components/categories";
import { Container } from "@mui/material";
import Footer from '../components/footer/Footer';
import { UIProvider } from '../context/indexUi';
import SearchBar from '../components/searchBar/SearchBar';
import AppMenu from '../components/drawer/Drawer';

import "@fontsource/poppins";

export default function Home() {

  useEffect(() => {
    document.title = "Ayni-Home"
  }, []);

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <UIProvider>
        <Appbar />
        <Banner />
        <Slider />
        <SearchBar />
        <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "30px 0px" }}>
          <Typography variant="h4" sx={{ fontFamily:"Poppins", fontWeight:"bold"}}> ¿Qué quieres intercambiar? </Typography>
        </Box>
        <Categories />
        <Trades />
        {/* <Categories /> */}
        <Footer />
        <AppMenu />
      </UIProvider>
    </Container>
  );
}
