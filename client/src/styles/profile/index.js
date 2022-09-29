import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"


export const EditProfile = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
    maxWidth: "100",
    paddingTop: "5%",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  }));