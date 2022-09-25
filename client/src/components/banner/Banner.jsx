import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";
import "@fontsource/poppins";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    
    <BannerContainer sx={{ height: "600px" }}>
      <BannerContent>
        <Typography variant="h6"> Te damos la bienvenida a </Typography>
        <BannerTitle variant="h2">AYNI</BannerTitle>
        <BannerDescription variant="subtitle">
          Significa 'Reciprocidad'. <br></br> Compartamos conocimientos entre
          compañeros.<br></br>“Hoy por mí, mañana por ti.”
        </BannerDescription>
      </BannerContent>
      <BannerImage
        src="./images/banner/post-sign.png"
        alt="poste con flechas apuntando hacia distintas direcciones"
      />
    </BannerContainer>
  );
}
