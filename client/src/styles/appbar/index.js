import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Typography, List } from "@mui/material";
import "@fontsource/poppins";

// container
export const AppbarContainer = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 4,
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
    width: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    width:"80px"
  },
}));
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2em",
  color: Colors.secondary,
  fontFamily: '"Poppins"',
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
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems:"center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));
