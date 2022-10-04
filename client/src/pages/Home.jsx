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
// import axios from 'axios';

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
        <Trades />
        {/* <Categories /> */}
        <Footer />
        <AppMenu />
      </UIProvider>
    </Container>
  );
}
