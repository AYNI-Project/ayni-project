import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { Colors } from "../../styles/theme";

export const FooterBox = styled(Box)(({ theme }) => ({
  height: "120px",
  backgroundColor: Colors.shaft,
  color: Colors.white,
  padding: "30px 0px",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  [theme.breakpoints.down("md")]: {
    height: "120px",
    padding: "10px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
    fontSize: "12px",
    height: "300px",
  },
}));

export const FooterTitle = styled(Typography)((theme) => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));
