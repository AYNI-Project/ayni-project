import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors, DrawerWidth} from "../theme";
import { Typography, List, IconButton, Button} from "@mui/material";
import "@fontsource/poppins"; 


// container
export const AppbarContainer = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 4,
  position: "relative",
  background: Colors.white,
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
  },
}));

// header
export const LogoImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "200px",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width:"150x"
  },
}));
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2em",
  color: Colors.secondary,
  
  fontWeight: 700,
}));

//list
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  alignItems: "center",
  paddingLeft: "15rem",
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

///DrawerMenu BUTTON


export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px ',
  lineHeight: 1.5,
  color: '#fff',
  backgroundColor: '#FFA37F',
  borderColor: '#0063cc',
  fontFamily: [
    'Poppins',
    
  ].join(','),
  '&:hover': {
    backgroundColor: '#5BBCC0',
    borderColor: '#5BBCC0',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFA37F',
    borderColor: '#FFA37F',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});