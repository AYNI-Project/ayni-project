import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AlertBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxHeight: "10vh",
  alignItems: "center",
  color:"#5BBCC0",
//   [theme.breakpoints.down("sm")]: {
//   },
}));
