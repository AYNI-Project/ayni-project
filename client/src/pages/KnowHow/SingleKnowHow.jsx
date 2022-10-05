
import { useState, useEffect } from "react";
import { knowledge } from "../../data/conocimientos";
import {useNavigate} from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Stack,
  Button
} from "@mui/material";

import { styled } from "@mui/material/styles";
import {
  Exchange,
  ExchangeImage,
  ExchangeActionButton,
  ExchangeFavButton,
  ExchangeMetaWrapper,
  ExchangeActionsWrapper,
} from "../../styles/KnowHow/index.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "@fontsource/poppins";
import { Colors } from "../../styles/theme";
import { Btn} from "../../styles/auth";

const useStyles = styled((theme) => ({
  container:{ 
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },

  },
}));


export default function SingleKnowHow({ matches }) {
  const classes = useStyles();
  
  //PAGINATION
  //let [pageNumber, setPageNumber] = useState(1)
  const [getKnowledge, setGetKnowledge] = useState([]);
  const [knowledgeCategory, setKnowledgeCategory] = useState([]);
  const [liked, setLiked] = useState(false);
  let [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  //uspeParams para recuperar el id de la categoria
  
  let { id_categoria } = useParams();
  
  // const URL =`url`

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/knowledge/`);
      setGetKnowledge(res.data)
      //console.log(res.data.filter((e) => e.categoria_id == id_categoria))
      setKnowledgeCategory(
        res.data.filter((e) => e.categoria_id == id_categoria)
      );
      
     
    };
    fetchData();

  }, []);


  function searchByCategory(category) {
    setKnowledgeCategory(getKnowledge);
    if (category !== "all"){
      setKnowledgeCategory(
        getKnowledge.filter((knows) => knows.categoria_id === category)
      );
      navigate(`/knowledge/${category}`)
    }
    console.log("mostrando lista", knowledgeCategory);
  }

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
  };
  function handleFavorite(id_conocimientos_usuario) {
    const newFavorites = favorites.map((knows) => {
      return knows.id_conocimientos_usuario === id_conocimientos_usuario
        ? { ...knows, favorite: !knows.favorite }
        : knows;
    });
    setFavorites(newFavorites);
  }
  return (
    <Grid container >
  
          <Grid item sm={2} md={6}>

          <nav aria-label="main category page">
            <List  >
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory("all")}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Todas las categorías" sx={{fontFamily:"Poppins"}}/>
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(1)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Programación" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(2)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tecnología" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(3)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Música" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory("deporte")}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Deporte" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(4)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Idioma" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(5)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cocina" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(6)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Arte" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory(7)}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Más" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
         
     
          </Grid>
    
      
        <Grid  container className={classes.container} item
                xs={2}
                sm={7}
                md={3} > 
        {/* //container spacing={2} sx={{maxHeight:"300px"}} bgcolor="red" */}
         
          {knowledgeCategory.length > 0 ? (
            knowledgeCategory.map((knows) => 
              <Grid
                key={knows.id_conocimientos_usuario}
               
              >
                <Link to="/knowledge/detail"  >
                  <Card sx={{ maxWidth: 345, mb: 5, height: 370 }} >
                    <CardActionArea>
                      <CardMedia>
                        <ExchangeImage src={knows.imagen} />
                      </CardMedia>
                      <CardContent>
                        <ExchangeMetaWrapper>
                          <Typography
                            variant={matches ? "h6" : "h5"}
                            sx={{ fontFamily: "Poppins", fontWeight: 600 }}
                          >
                            {knows.titulo}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {knows.descripcion}
                          </Typography>
                        </ExchangeMetaWrapper>
                      </CardContent>
                      <Button variant="contained" size="small" color='secondary'  sx={{fontFamily:'Poppins', fontWeight:600, color:"white"}}>Me interesa</Button>
                    </CardActionArea>
                    <ExchangeActionsWrapper>
                      <Stack direction="row">
                        <ExchangeFavButton isfav={0}>
                          {liked ? (
                            <FavoriteBorderIcon
                              onClick={handleNotification(1)}
                            ></FavoriteBorderIcon>
                          ) : (
                            <FavoriteIcon
                              color="secondary"
                              onClick={() => {
                                handleFavorite(knows.id_conocimientos_usuario);
                              }}
                            >
                              {knows.favorite === true ? "Remove" : "Add"}
                            </FavoriteIcon>
                          )}
                        </ExchangeFavButton>
                        <ExchangeActionButton>
                          <ShareIcon color="secondary" />
                        </ExchangeActionButton>
                      </Stack>
                    </ExchangeActionsWrapper>
                  </Card>
                </Link>
              </Grid>
            )
          ) : (
            <>
              <Typography sx={{fontFamily:"Poppins", fontWeight:700, marginTop:"15em", marginBotton:"20em"}}> "Lo siento, eso que estas buscando seguro aparecerá pronto. :/"</Typography>
            </>
          )}
        </Grid>
        </Grid>
   
  );
}
