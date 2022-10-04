import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";

export const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const DetailContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const DetailView = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "50%",
  background: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  }
}));

export const DetailImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "300px",
  borderRadius:"5px",
  [theme.breakpoints.down("md")]: {
    width: "300px"
  },
  [theme.breakpoints.down("sm")]: {
    width:"300px"
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: '72px',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]:
    { fontSize: '42px' }
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
