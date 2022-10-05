import React from "react";
import "../App.css";
import {
  Grid,

  Typography,

} from "@mui/material";

import Appbar from "../components/appbar";
import "@fontsource/poppins";
import Footer from "../components/footer/Footer";



function Error() {


 
  return (
    <>
      <Appbar />

      <Grid>
        
      <Grid container spacing={1}>
                
          <Grid xs={12} sm={6} item>
          <img src={"../assets/banner/errorpicture404.png"} alt="404 error, no se ha encontrado" />
          <Typography
              gutterBottom
              variant="h6"
              align="center"
              color="secondary"
              sx={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              Oops, es probable que esta página este en construcción
            </Typography>


        </Grid>
        </Grid>          
      </Grid>
      <Footer />
    </>
  );
}

export default Error;
