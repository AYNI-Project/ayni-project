import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from "../../styles/banner";
import "@fontsource/poppins"; 


export default function Banner() {
    const theme =useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer sx={{ height: "600px"}} >
       
      <BannerContent >
        
        <Typography variant="h6"  > Unete a la comunidad</Typography>
        <BannerTitle variant="h2" >Lorem ipsum</BannerTitle>
        <BannerDescription variant="subtitle">Sabemos que lo que estas buscando, la comunidad lo tiene. Compartamos!        </BannerDescription>
      
      </BannerContent>
      <BannerImage src="./images/banner/exchange2.jpg" alt="fire hands"/>
     
      
    </BannerContainer>
    
  )
}

