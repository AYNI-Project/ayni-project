// import { Product, CategoryImage } from "../../styles/products";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Link
} from "@mui/material";





export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "18%",
  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "80%", 
    padding: '24px',
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export default function SingleCategory({ matches }) {
  let {id_categoria} = useParams();
 const[categories, setCategories] = useState([]);
 

useEffect(() => {

  const fetchData = async () => {
      try {
          let res = await axios.get(process.env.REACT_APP_BACKEND_URL + 'category');
         
              setCategories(res.data);
         console.log(res.data);
         
      } catch (error) {
        console.error(error)
          
      }
  }
  fetchData({id_categoria});

}, [])
  


  return (
 
    < Grid container spacing={3} sx={{ flexGrow: 1 }} columns={{ xs: 8, sm: 8, md: 12 }}  alignItems="center">
    {categories.map(knows => (
      
      <Grid  item xs={8} spacing={3} md={3} key={"id_categoria"}>
      <Link href={`knowledge/${knows.id_categoria}`}  sx={{textDecoration: "none"}}>
      <Box xs={8} sm={4}
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                justifyContent: 'center',
              }}
            >
     
       <Paper elevation={2} sx={{width:"220px", borderRadius:"10px"}}>
          <ProductImage    src={knows.imagen} />
       
          
          <Typography variant={matches ? "h6" : "h5"} lineHeight={2} align='center' sx={{fontFamily: "Poppins"}}>
          {knows.nombre}
        </Typography>
        
         </Paper>
       
         </Box>
       </Link> 
       
       </Grid>

    ))}
   

</Grid>
      
    
   
  )
} ;


 