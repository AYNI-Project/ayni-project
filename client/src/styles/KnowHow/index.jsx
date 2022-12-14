import { styled } from "@mui/material/styles";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom, slideInRight } from "../animation";
import { Typography } from "@mui/material";
import { Colors } from '../theme';
import "@fontsource/poppins"; 

export const Exchange = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column", 
  marginLeft: "0",
  [theme.breakpoints.up("md")]: {
   
      },
}));

export const ExchangeImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "14em",
  display: "flex",
  borderRadius: "25px",
  justifyContent: "center",
  alignItems: "center",
 padding: '5px',
  [theme.breakpoints.down("md")]: {
    width: "80%", 
    padding: '24px',
  },
}));

export const ExchangeActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ExchangeFavButton = styled(ExchangeActionButton)(({ isfav, theme }) => ({
  color: isfav ? Colors.primary : Colors.light,  
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const ExchangeAddButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ExchangeMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ExchangeActionsWrapper = styled(Box)(({ show, theme }) => ({ 
  [theme.breakpoints.up("md")]: {
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));
