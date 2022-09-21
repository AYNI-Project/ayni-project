import { Box , Grid, List, ListItemText, Typography} from "@mui/material";
import {FooterTitle} from "../../styles/footer";
import { Colors } from "../../styles/theme";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer () {

    return (
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md:10},
                pt: 12,
                pb:12,
                fontSize:{ xs:'12px', md: '14px'}
            }}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">¿Quienes somos?</FooterTitle>
                    <Typography variant="caption2"> Siguenos y comparte en nuestras redes
                    </Typography>
                    <Box
                        sx={{
                        mt: 4,
                        color: Colors.dove_gray,
                 }}>
                    <FacebookIcon sx={{ mr: 1 }} />
                    <TwitterIcon sx={{ mr: 1 }} />
                    <InstagramIcon />
                </Box>
                
            </Grid>
            <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
                <Typography variant="caption2" lineHeight={2}>Cómo funciona </Typography>
            </ListItemText>
            <ListItemText>
                <Typography variant="caption2" lineHeight={2}>Preguntas Frecuentes</Typography>
            </ListItemText>
            <ListItemText>
                <Typography variant="caption2" lineHeight={2}>Unirse</Typography>
            </ListItemText>
            <ListItemText>
                <Typography variant="caption2" lineHeight={2}>xxxxxx </Typography>
            </ListItemText>
          </List>
          </Grid>
        </Grid>
        
              

           
        </Box>
    );
    }