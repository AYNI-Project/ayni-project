import IconBreadcrumbs from "./BreadCrumbs";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Rating,
  Button,
  Chip,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Appbar from "../../components/appbar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  ExchangeImage,
  Exchange,
  ExchangeActionButton,
} from "../../styles/KnowHow";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Colors } from "../../styles/theme";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
  width: "100%",
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "30px",
 
  width: "50%",
  lineHeight: 1.5,
}));

const DetailImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  height: "250px",
  borderRadius: "25px",
  justifyContent: "center",
  alignItems: "center",
 

  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "300px",
  },
}));

export default function DetailCard(results) {
  const value = 3.5;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Appbar />
      <IconBreadcrumbs />
      <ProductDetailWrapper
        bgcolor="lightblue"
        display={"flex"}
        flexDirection={matches ? "column" : "row"}>
        <Exchange
          bgcolor="red" sx={{ width: "20%", marginLeft:"30%"}}
          >
          <DetailImage src="https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg" sx={{width:"20px"}}/>
        </Exchange>
        {/*  information wrapper  */}

        <ProductDetailInfoWrapper bgcolor="pink" sx={{ width: "50%" }}>
          <Stack direction="row" spacing={1} sx={{ mt: 4, marginRight: "6px" }}>
            <Avatar
              alt="Remy Sharp"
              src="/images/missyavatar.jpg"
              sx={{ width: 77, height: 77 }}
            />
            <Stack>
              <Typography sx={{ fontFamily: "Poppins" }} variant="h4">
                {results.titulo} 
              </Typography>

              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Stack>
          </Stack>
          <Box display={"flex"} sx={{ mt: 4 }}>
            <LocationOnIcon color="secondary" sx={{ marginRight: "6px" }} />
            <Typography variant="subtitle">Barcelona</Typography>
          </Box>

          <Typography
            sx={{ lineHeight: 2, fontFamily: "Poppins", fontWeight: "bold" }}
            color="secondary"
            variant="h4"
          >
            {results.titulo} 
          </Typography>

          <Typography variant="body">
            {results.descripcion}
          </Typography>
          <Box
            sx={{ mt: 4 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              variant="contained"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Quiero Trueque
            </Button>
          </Box>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 4,
            }}
          >
            <Chip label="primary" color="secondary" variant="outlined" />
            <Chip label="success" color="secondary" variant="outlined" />
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            sx={{ mt: 4, color: Colors.light }}
          >
            <FavoriteIcon sx={{ mr: 2 }} />
            <ShareIcon sx={{ mr: 2 }} />
          </Box>
        </ProductDetailInfoWrapper>
      </ProductDetailWrapper>
    </Box>
  );
}

{
  /*<Box p={5} sx={{display:"flex", m:"15px"  }}>
        <Stack sx={{ position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

        }}>  <img src= {results.foto}
     
      
        />
        </Stack>
   
    <Avatar
        alt="Remy Sharp"
        src="/images/missyavatar.jpg"
        sx={{ width: 77, height: 77 }}
      />
   
      
     <Typography>
      {results.titulo}

     </Typography>
     <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ display:"flex", ml: 2 }}>{labels[value]}</Box> 
    </Box>   }
      */
}
