import { Container, Typography, Box} from "@mui/material"; 
import { ThemeProvider } from '@mui/system'
import { useEffect } from 'react';
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner/Banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";


function App() {
  useEffect(() => {
    document.title = "Ayni-Home"
  }, []);
  return (
    <ThemeProvider theme={theme}> 
      <Container 
        maxWidth= "xl"
        sx= {{
          background:'#fff'
        }}
        >
          
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent ={"center"} sx={{ p:4}}>
          <Typography variant ="h4"> ¿Qué quieres truequear? </Typography>
          </Box>
          <Products />

          <Footer />
      </Container>
    </ThemeProvider>

  );
}

export default App;
