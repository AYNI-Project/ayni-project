import { useEffect } from 'react';
import Appbar from "../components/appbar";
import Banner from "../components/banner/Banner";
import Slider from "../components/slider";
import { Container } from "@mui/material";
import Footer from '../components/footer/Footer';
import { UIProvider } from '../context/indexUi';
import SearchBar from '../components/searchBar/SearchBar';
import AppMenu from '../components/drawer/Drawer';
import "@fontsource/poppins";
import Categories from '../components/categories';
import Trades from "../pages/Trades";

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
        <Categories />
        <Footer />
        <AppMenu />
   
      </UIProvider>
    </Container>
  );
}
