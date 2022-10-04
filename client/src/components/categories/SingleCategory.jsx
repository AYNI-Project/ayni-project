import { Product, CategoryImage } from "../../styles/products";
import ProductMeta from "./CategoriesMeta";
import Paper from '@mui/material/Paper';
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
  Link
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useParams} from "react-router-dom";

export default function SingleCategory({ matches }) {
  let {id_categoria} = useParams
 const[categories, setCategories] = useState([]);
 

useEffect(() => {

  const fetchData = async () => {
      try {
          let res = await axios.get('https://ayni-project.herokuapp.com/category/${id_categoria}');
         
              setCategories(res.data);
         console.log(res.data);
         
      } catch (error) {
        console.error(error)
          
      }
  }
  fetchData({id_categoria});

}, [])
  


  return (
 
    <>
    {categories.map(knows => (
      
      
      <Link href={`knowledge/${knows.id_categoria}`}>
       <Paper elevation={2} sx={{width:"220px", borderRadius:"10px"}}>
       
          
          <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {knows.nombre}
        </Typography>
        
         </Paper>
       </Link>  
       

    ))}
   


      
    
     </>
  )
} ;


 {/* let [getKnowledge, setGetknowledge] = useState([]);
  let [KnowledgeCategory, setKnowledgeCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://ayni-project.herokuapp.com/category")
      .then((res) => {
        setGetknowledge(res.data);
        setKnowledgeCategory(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function searchByCategory(category) {
    setKnowledgeCategory(getKnowledge);
    
      setKnowledgeCategory(
        getKnowledge.filter((knows) => knows.categoria_id === category)
      );
    console.log("mostrando lista", KnowledgeCategory);
  }


  return ( */}
     {/* {KnowledgeCategory.map((knows) => {
           
              return (
                <List>
                  <Link to="/knowledge" >               
                 
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => searchByCategory(1)} 
                  >{knows.categoria_id}
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
                  <ListItemButton onClick={() => searchByCategory(4)}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deporte" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => searchByCategory(5)}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Idioma" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => searchByCategory(6)}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cocina" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => searchByCategory(7)}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Arte" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => searchByCategory(8)}>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Más" />
                  </ListItemButton>
                </ListItem>
                </Link>
              </List> */}
              