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
} from "@mui/material";
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
import { LeftContent, RightContent, View } from "../../styles/auth";

export default function SingleKnowHow({ matches }) {
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
    /*  axios
      .get(`http://localhost:3001/knowledge/` )
      .then((res) => {
        debugger;
        //setTimeout(() =>
       // setGetKnowledge(getKnowledge => getKnowledge.concat(...res.data)),1000)
       // setKnowledgeCategory(knowledgeCategory => knowledgeCategory.concat(...res.data));
        console.log(knowledgeCategory)
        searchByCategory(id_categoria)
        console.log(knowledgeCategory)
        // setKnowledgeCategory(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));*/
  }, []);

  // const searchByStepName = (e:string) => {
  //   setClientsDataSearch(clientsData);
  //   if(clientsData !== undefined){
  //           setClientsDataSearch(clientsData.filter((i) => i.workflows[0].steps.find(n => n.stepName === e)));
  //   }
  // };
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
  
    //<Box  p={2} bgcolor="pink"  >
    <View>
 
        <LeftContent>
          <nav aria-label="main category page">
            <List >
              <ListItem disablePadding>
                <ListItemButton onClick={() => searchByCategory("all")}>
                  <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Todas las categorías" />
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
         
          </LeftContent>

    
      
        <Grid container spacing={2} sx={{maxHeight:"300px"}} bgcolor="red"> 
         
          {knowledgeCategory.length > 0 ? (
            knowledgeCategory.map((knows) => 
              <Grid
                key={knows.id_conocimientos_usuario}
                item
                xs={6}
                sm={4}
                md={3}
              >
                <Link to="/knowledge/detail">
                  <Card sx={{ maxWidth: 345, mb: 5, height: 370 }}>
                    <CardActionArea>
                      <CardMedia>
                        <ExchangeImage src={knows.imagen} />
                      </CardMedia>
                      <CardContent>
                        <ExchangeMetaWrapper>
                          <Typography
                            variant={matches ? "h6" : "h5"}
                            sx={{ fontFamily: "Poppins", fontWeight: 700 }}
                          >
                            {knows.titulo}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {knows.descripcion}
                          </Typography>
                        </ExchangeMetaWrapper>
                      </CardContent>
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
              <Typography> "Lo siento, eso que estas buscando seguro aparecerá pronto. :/"</Typography>
            </>
          )}
        </Grid>
        
        </View>
  );
}
