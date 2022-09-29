import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "100px",
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 10,
        pb: 10,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1" sx={{ textDecoration:"none" }}><Link to="/about-us">Sobre AYNI</Link></FooterTitle>
          <Typography> Síguenos y comparte en: </Typography>
          <Box sx={{ mt: 3, color: Colors.dove_gray, gap: 2 }}>
            <a href="https://www.facebook.com/factoriaf5/"><FacebookIcon sx={{ mr: 1 }} /></a>
            <a href="https://twitter.com/factoriaf5"><TwitterIcon sx={{ mr: 1 }} /></a>
            <a href="https://www.instagram.com/factoria_f5/"><InstagramIcon sx={{ mr: 1 }} /></a>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Más Información</FooterTitle>
          <List>
            <ListItemText>
              <Link to="/contact"><Typography variant="caption2" lineHeight={2}>
                Contáctanos{" "}
              </Typography></Link>
            </ListItemText>
            <ListItemText>
              <Link to="/faq"><Typography variant="caption2" lineHeight={2}>
                Preguntas Frecuentes
              </Typography></Link>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
