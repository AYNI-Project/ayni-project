import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";

export const AlertBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxHeight: "10vh",
  padding: "0px 0px",
  margin: "auto",
  alignItems: "center",
  color: Colors.secondary,
}));