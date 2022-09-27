import { styled } from "@mui/material/styles";
import { Box, Button, Link, Typography, TextField} from "@mui/material";
// import { Link } from "react-router-dom";

export const View = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  maxHeight: "100vh",
  alignItems: "center",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll-y",
    padding: "10px",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "50%",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
  },
}));

export const RightContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "50%",
  paddingTop: "60px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
  },
}));

export const LogoAyni = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "20em",
  [theme.breakpoints.down("md")]: {
    width: "15em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "10em",
  },
}));

export const LoginImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "420px",
  maxHeight: "515px",
  margin: "5px",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    maxHeight: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    maxHeight: "250px",
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "16px",
  paddingBottom: "30px",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    paddingBottom: "10px",
  },
}));

export const XForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));

export const FormDiv = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "200px",
  padding: "10px 0px",
  justifyContent: "center",
}));

export const InputForm = styled(TextField)(({ theme }) => ({
  color: "#FFA37F",
  width: "350px",
  margin: "10px 0px",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "20px 0px",
  fontWeight: "bold",
  fontSize: "24px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0px",
  },
}));

export const LinkText = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "flex-end",
  fontSize: "14px",
  color: "#FFA37F",
}));

export const Btn = styled(Button )(({ theme }) => ({
  textAlign: "center",
  fontSize: "18px",
  color: "#F6F6F6",
  width: "350px",
  height: "50px",
  backgroundColor: "#FFA37F",
}));

export const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontFamily: "Poppins",
}));
