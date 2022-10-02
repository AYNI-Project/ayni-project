import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors, DrawerWidth} from "../theme";
import { Typography, List, IconButton } from "@mui/material";
import "@fontsource/poppins"; 


// container
export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',

}))

// header
export const LogoImage = styled("img")(({ src, theme }) => ({
 
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "200px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "200px",
  },
}));
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "2em",
    color: Colors.secondary,
    fontFamily: '"Poppins"',
    fontWeight: 700,
    }
  ));

  //list
  export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    alignItems: "center",
    paddingLeft:"15rem",
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0
  
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

