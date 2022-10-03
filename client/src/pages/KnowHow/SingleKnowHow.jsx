import { useState, useEffect } from 'react';
import { knowledge } from "../../data/conocimientos"
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea,List, ListItem, ListItemButton, ListItemText, ListItemIcon, Stack } from '@mui/material';
import { Exchange, ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeMetaWrapper, ExchangeActionsWrapper } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "@fontsource/poppins";
import { Colors } from "../../styles/theme";
import { initializeFirestore } from 'firebase/firestore';



export default function SingleKnowHow({matches}) {
//PAGINATION
//let [pageNumber, setPageNumber] = useState(1)
let [getKnowledge, setGetknowledge] = useState ([]);
let [KnowledgeCategory, setKnowledgeCategory] = useState ([])
let [favorites, setFavorites] = useState([]);

// const URL =`url`


useEffect(() => {
  axios
  .get("/db/2dataList.json")
  .then((res) =>{ setGetknowledge(res.data.results);
    setKnowledgeCategory(res.data.results)
    console.log(res.data.results)})
  .catch((err) => console.log(err));
  }
,[])
  
// const searchByStepName = (e:string) => {  
//   setClientsDataSearch(clientsData);
//   if(clientsData !== undefined){
//           setClientsDataSearch(clientsData.filter((i) => i.workflows[0].steps.find(n => n.stepName === e)));
//   }
// };
function searchByCategory(category) {
  setKnowledgeCategory(getKnowledge)
  if (category !== "all" ) 
    setKnowledgeCategory(getKnowledge.filter((knows) => knows.categoria === category
   ))
  console.log("mostrando lista", KnowledgeCategory)}
  

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id_conocimientos_usuario) {
    const newFavorites = favorites.map(knows => {
      return knows.id_conocimientos_usuario === id_conocimientos_usuario ? { ...knows, favorite: !knows.favorite } : knows;
    });

    setFavorites(newFavorites);
  }

  return (
    <Box flex={4} p={2} >
      <Box flex={1} p={2} sx={{ display: { sm: "none", md:"block"}}}>
      <Box bgcolor={Colors.primary} position= {"fixed"} sx={{ borderRadius: 2, boxShadow: 2,height:"390px", width:"20%", }} >
    <nav aria-label="main category page">
        <List >
        <ListItem disablePadding >
            <ListItemButton onClick={() => searchByCategory("all")}>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText  primary="Todas las categorías" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton onClick={() => searchByCategory("programación")}>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText  primary="Programación" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => searchByCategory("tecnologia")}>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Tecnología" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => searchByCategory("musica")}>
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
            <ListItemButton onClick={() => searchByCategory("idiomas")}>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Idioma" />
            </ListItemButton>
          </ListItem>   
          <ListItem disablePadding>
            <ListItemButton onClick={() => searchByCategory("cocina")}>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Cocina" />
            </ListItemButton>
            </ListItem>            
            <ListItem disablePadding>
            <ListItemButton onClick={() => searchByCategory("arte")}>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Arte" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => searchByCategory("mas")}>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Más" />
            </ListItemButton>
          
          </ListItem>
        </List>
      </nav>
      </Box>
      </Box>
      <Exchange>
        <Grid container spacing={2}>
            {
           
           KnowledgeCategory.map( (knows) => {
                  //let {id_usuario_conocimiento, titulo, descripcion, foto} = knows;
                  if (getKnowledge) {         
                
                    return (
        <Grid key={knows.id_usuario_conocimiento} item xs={6}sm = {4} md ={3}  >
       <Link to="/knowledge/detail"   >
         <Card sx={{ maxWidth: 345 , mb: 5, height: 370 }}>
      <CardActionArea>
        <CardMedia>
       
          <ExchangeImage src={knows.foto} />
       
        </CardMedia>
        <CardContent>
            <ExchangeMetaWrapper>
          
          <Typography variant={matches ? "h6" : "h5"} sx={{ fontFamily: "Poppins", fontWeight: 700}}
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
                        <FavoriteIcon color="secondary" onClick={() => {
                          handleFavorite(knows.id_usuario_conocimiento);
                        }}>{knows.favorite === true ? "Remove" : "Add"}
                        </FavoriteIcon>
                      </ExchangeFavButton>
                      <ExchangeActionButton>
                        <ShareIcon color="secondary" />
                      </ExchangeActionButton>
                    </Stack>
                  </ExchangeActionsWrapper>
    </Card> 
    </Link>

    </Grid>
   
     
     )} 
      return <>
      <Typography> "No Characters Found :/"</Typography>
      </>
    })      
  }</Grid>  
    </Exchange>
    </ Box>
  )
            
  }
