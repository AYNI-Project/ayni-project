import  {Box, styled} from '@mui/system';
import { Typography } from "@mui/material";
import { Colors } from '../theme';
import "@fontsource/poppins"; 



export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "40px 0px 40px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: Colors.secondary,
  }));
  
export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins"',
    fontWeight: 700,
 [theme.breakpoints.up("md")]: {
   fontSize: "1.8rem",
 },
 color: Colors.white,
 fontSize: "1.5rem",
}));