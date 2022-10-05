import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import "@fontsource/poppins"; 
import { Colors } from "../../styles/theme";

export const BannerContainer = styled(Box) (({theme}) => ({
    display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
  }));
  
export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "300px",
    },
  })); 
  export const BannerTitle = styled(Typography)(({theme}) => ({ 
    lineHeight: 1.5,
    fontSize: '50px',
    fontFamily: "Poppins",
    marginBottom: '20px' ,
    [theme.breakpoints.down('sm')]:
    {fontSize: '42px' }
   
  }));

  export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",

    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));

  export const BannerButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === "primary" && styles.primary,
      props.color === "secondary" && styles.secondary,
    ],
    
  })(({ theme }) => ({
    
    padding: "15px 40px",
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: "16px",
    textDecoration:"none",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
      fontSize: "14px",
    },
  }));