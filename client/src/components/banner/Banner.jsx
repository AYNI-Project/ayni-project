import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
  BannerButton
} from "../../styles/banner";
import "@fontsource/poppins";
import "@fontsource/poppins"; 
import { Link } from "react-router-dom";


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (

    <BannerContainer>
      <BannerContent >
        <Typography variant="h6" sx={{fontFamily:"Krona One"}}>Ayni</Typography>
        <BannerTitle variant="h2" sx={{fontFamily:"Poppins", fontWeight:600}}>
        Haciendo Comunidad
        </BannerTitle>

        <BannerDescription variant="subtitle"  >
        Significa 'Reciprocidad'. <br></br> Compartamos conocimientos entre
          compañeros.<br></br>“Hoy por ti, mañana por mi.”
        </BannerDescription>
        <Link to="/knowledge/" sx={{textDecoration:"none"}}>
        <BannerButton color="primary" >Busca trueques</BannerButton>
        </Link>
      </BannerContent>
      <BannerImage
        src="./images/banner/landingAyni.png"
        alt="people talking"/>
    </BannerContainer>
  );
}