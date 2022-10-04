import BreadcrumbsDetail from "./BreadcrumbsDetail";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Rating,
  Chip,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Appbar from "../../components/appbar";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  //   ExchangeImage,
  Exchange,
  //   ExchangeActionButton,
} from "../../styles/KnowHow";
import { DetailImage } from "../../styles/details";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Colors } from "../../styles/theme";
import DialogDetail from "./DialogDetail";
import { View, RightContent, LeftContent } from "../../styles/auth";
import Footer from "../../components/footer/Footer";
import { DetailView } from "../../styles/details";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetailCard(results) {
  const value = 3.5;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(process.env.REACT_APP_BACKEND_URL + `knowledge/id/${id}`)
      .then(res => {
        console.log("probando", res.data)
        setData(res.data);
        setLoading(false)
      })
  }, [id])

  const getKnowledge = [data];
console.log(getKnowledge);
  if (loading) return <section>Cargando...</section>

  return (
    <>
      <Appbar />
      <View sx={{ flexDirection: "column" }}>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "flexstart", marginLeft: "20vh" }}>
          <BreadcrumbsDetail />
        </Box>

        {getKnowledge.map((results, index) => (
          <DetailView key={index}>
            <LeftContent sx={{ width: "50%" }}>
              <Exchange sx={{ width: "45%", alignItem: "center" }}>
                <DetailImage
                  src="https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg" />
              </Exchange>
            </LeftContent>

            <RightContent sx={{ width: "60%", display: "flex", flexDirection: "flexstart", justifyContent: "center", borderRadius: "10px", paddingBottom: "15px" }}>
              <Stack direction="row" spacing={1} sx={{ mt: 4, marginRight: "6px" }}>
                <Avatar alt="Remy Sharp"
                  src="/images/missyavatar.jpg"
                  sx={{ width: 77, height: 77 }} />
                <Stack>
                  <Typography sx={{ fontFamily: "Poppins" }} variant="h4">
                    {results.titulo}
                  </Typography>
                  <Rating name="text-feedback" value={value} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  } />
                </Stack>
              </Stack>

              <Box display={"flex"} sx={{ mt: 4 }}>
                <LocationOnIcon color="secondary" sx={{ marginRight: "6px" }} />
                <Typography variant="subtitle">Barcelona</Typography>
              </Box>

              <Typography
                sx={{ lineHeight: 2, fontFamily: "Poppins", fontWeight: "bold" }}
                color="secondary"
                variant="h4">{results.titulo}
              </Typography>

              <Typography variant="body">{results.descripcion}</Typography>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <DialogDetail />
              </Box>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 4 }}>
                <Chip label="Presencial" color="secondary" variant="outlined" />
                <Chip label="Online" color="secondary" variant="outlined" />
              </Stack>
              <Box display="flex" alignItems="center" sx={{ mt: 4, color: Colors.light }}>
                <FavoriteIcon sx={{ mr: 2 }} label={"Favorito"} />
                <ShareIcon sx={{ mr: 2 }} />
              </Box>
            </RightContent>
          </DetailView>))}
      </View>
      <Footer />
    </>
  )
};