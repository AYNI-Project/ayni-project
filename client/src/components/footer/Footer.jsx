import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle, FooterBox } from "../../styles/footer";
import { LogoAyni } from "../../styles/auth";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <FooterBox>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item md={5} lg={2}>
          <List>
            <ListItemText>
              <FooterTitle variant="body1"><Link className="link" to="/about-us">Sobre AYNI</Link></FooterTitle>
              <Link className="link" to="/contact"><Typography variant="caption2" lineHeight={2}>
                Contáctanos{" "}
              </Typography></Link>
            </ListItemText>
            <ListItemText>
              <Link className="link" to="/faq"><Typography variant="caption2" lineHeight={2}>
                Preguntas Frecuentes
              </Typography></Link>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={5} lg={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <LogoAyni src="./images/footer/logo-footer.png" alt="logo-factoriaf5" sx={{ width: "100px" }} />
        </Grid>
        <Grid item md={5} lg={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography> Síguenos y comparte en: </Typography>
          <Box sx={{ mt: 3, color: Colors.dove_gray, gap: 2 }}>
            <a className="icon" href="https://www.facebook.com/factoriaf5/"><FacebookIcon sx={{ mr: 1 }} /></a>
            <a className="icon" href="https://twitter.com/factoriaf5"><TwitterIcon sx={{ mr: 1 }} /></a>
            <a className="icon" href="https://www.instagram.com/factoria_f5/"><InstagramIcon sx={{ mr: 1 }} /></a>
          </Box>
        </Grid>
      </Grid>
    </FooterBox>
  );
}