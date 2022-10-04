import {
    Product,
    CategoryImage,
} from "../../styles/products";
import CategoryMeta from "./CategoriesMeta";
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
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
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function SingleCategoryDesktop({ categories, matches }) {

    let [getKnowledge, setGetknowledge] = useState([]);
    let [KnowledgeCategory, setKnowledgeCategory] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://ayni-project.herokuapp.com/knowledge")
        .then((res) => {
          setGetknowledge(res.data);
          setKnowledgeCategory(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    function searchByCategory(category) {
      setKnowledgeCategory(getKnowledge);
      if (category !== "all")
      
        setKnowledgeCategory(
            getKnowledge.filter((knows) => knows.categoria_id == category)
        );
      console.log("mostrando lista", KnowledgeCategory);
    }
  

    return (
        <>
        {KnowledgeCategory.map((knows) => {
              
                 return (
                   <List>
                     <Link to="/knowledge" >               
                    
                   <ListItem disablePadding>
                   
                     <ListItemButton
                       onClick={() => searchByCategory("all")}
                     >
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
                   </Link>
                 </List>
                 
         // <Link className="link" to="/knowledge/${programación}">
         // <Paper elevation={2} sx={{width:"220px", borderRadius:"10px"}}>
         //   <Product>
         //     <CategoryImage src={categories.image} />
         //     <ProductMeta categories={categories} matches={matches}  onClick={() => searchByCategory({categories.name})}/>
         //   </Product>
         //   </Paper>
         // </Link>
                 )})}
        </>
    )
} 