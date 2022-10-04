import { useEffect} from 'react';
import Appbar from "../components/appbar";
import Banner from "../components/banner/Banner";
import Promotions from "../components/promotions";
import Categories from "../components/categories";
import { Container, Typography, Box } from "@mui/material";
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
        <Promotions />
        <SearchBar />
        <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "30px 0px" }}>
          <Typography variant="h4" sx={{ fontFamily:"Poppins", fontWeight:"bold"}}> ¿Qué quieres intercambiar? </Typography>
        </Box>
        <Categories />
        <Footer />
        <AppMenu />
      </UIProvider>
    </Container>
  );
}
