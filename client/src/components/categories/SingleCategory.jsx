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
import "../../App.css";





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
          let res = await axios.get(`http://localhost:3001/category`);
         
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
          {/* //<ProductImage    src={knows.imagen} /> */}
          <img className="icon-image" src= {"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAJJklEQVRoge2Ze3DU1RXHP+f322wSkt0kuwlkE2gADRDQAhYsoFLxAYmPQRjFB6U6FSvo1GlrH6NONR2dFh/VGTvT1kc7PkCc6ECVCkFAKupEa4SoEAKBQALZQLKPJJsnu/u7/SPJkmUf2URs/2i+Mzvz+517zrnn+7v3nnvuXRjFKEbxfwH5XwcwFFp35V2iKXVlUMnurGud+2LpnXciSpVqTe75U8AoUkg+mpEGgKF1CqoRtIMOe8VhkVIjnp+2HY73lCa/FaU+A0wgfsOQS7MWN1Z9a0SUqkxyul3XiaiVwFWAfQgTt4JdGGzIy87ZJjLHH02pfWfugwp5ZlCwD1qvaXo2mu43InJAlZkz3en3isivgAkj86IalNKezrNnv3AuIe+OvNma8BmoJBC/ocncrKsav4zmZcREnJ7yK1C8AKpopD7OQTXCvXm2ko8HC73v58/SxFhk6NoHsUjACIgopaTJve1hRH4H6EPpd3V2Y05KwmQ2JeI+gOJRh714nYio4cQ1LCJKlelNHssLwN3x9OoONtDb1YvoQqbdiiUjnRN1TlRQYU4xM3n6dxCJ2/XLDptvjciK4IDg76X33CDIBhHuuOuxF9871yChz9RHQkmTp/yv8Uh0+brxtXVQMGU8uq4BsL2ph846N8tnXQhAT1cvVZ8cYOqsCxmTnhLL1eomryVZKXXnwMhoIkopUCr6SCU8Ik7X1kcQeSJWe093L4eqjjJz/nQCgSAmk04waDB703H0YJDPb56MyaSH2r6sqKbokkLMyUmxOxUeyrOVrEskPi0hEp7yK/rXREy4mjzMnD+dt/c2MuftOjZVNaLrGqWFyTxWlIbJpIe1fXdeEc2NrvgdKx5vdG9fcF6IHFBl5r7sFH9hj5/s6HPY73FgDSyflc9NM/Mi2kQkZBMN2RkLSDHnmgTjJaUq4wxbv8+hFBpdW38qIs8PvPd09/LF7iqqPtxP8EwAUBhKYc3O4OoVCymYMj40faJhoM1/xs+edz/l64pqdAMMZaDpOtn5dubfcCnTLpqLP9BK0OhBhPsdtpI/j5iIUpVJTZ6Wo/Rvdl9XVLNr479YNG8G8743jeRBKdV5ysOGzXsYOyWPpatL4n6cZqebV57YwMK507nmipmY9LMT40Sji/I9++hUBiseWMYYSypAvcOWUxirAhiSiNO19SZENgNU7qri0Mf7uXflkrCOz8U77/+blmCAm++7MWq7q8nDK0+8wc/vvh57ljWmn7rjp3jt3T2s/cPdJKeY0US7Mde25J+x9OOuESVyO0Cru52KLZ9y36piTLpGi9/gqUMeTvq6AdjqM3izzg3A0sWXEvD4qP3qWFSfZX96h/tXFYeR2HjUFbIfwOSJuawons+mv2wBwFDGHfFijUlEqVJN+gpAPnhrD7dcPz+0gF91dlOKnddPdBA0DNbWtPNQMwSCfQXtyqUL2fnm7gifjcdOkZ2WimNcVkgWCBo83CJh9gOYPmUCbU1eOtu7ABYrVRoz3pgbYpN7zlSEbIATh08ydfG8UNttNo1AQzOrCizomsZT9gCChKacJT2VQHfkdD687whzZkwKD0DXWDdWhdkPxqyiidTuP8asBTPsTtf3C4FDwyIC+rSBJ1ESVlKMt6Tyy2nJoY5vmWSLsA4YkceNlPQU2po7IuTR7AeQm5PJkcbQtJtKDCKxpxZq/MCzocKDeuOIm8LPvbxZ58ZQBks+cVLyiRNlnK0eREFHa2eYnfd0K2azOUwWy/6sghFKSZpIzKNCTCKCZgk964JSZzvRNFCajtVmRZRARgZkhGegO5cvZP0zb4XeG2qdnNhfz2Vzp0YNQrToCfS0px17bt+IKVTMNJdQieKY6OBY/enQ+22T7RydY+W6zCREE3ZcbGH7xdawYCYV5DIlL4eK8kqUoSh7fhNrV14bGYBolC/IZ9u8vKhkvjxYT+FFkyLkCRNR0D7wfOXyy9i84/Owdl2L/w3KP9zH14cb6Onuwe8PoJlMvLhxJy2utghd0SQqiZNNLvS0FNIz+479grRHKA1FpO+ioA9j87MZk2Ol5sjJuMEPRuVXdTzw7BoWLbscc3ISv3huDbnTJuBu9SXsY/0/PmLpPWerBEOpE7F043zWYM3gtxt/vISyrRUJBwGR8z6hedyPr6qPM+4CB9mOsIwWNWPF9e2wVx4CQnV2ekYalmwrrW2dsUzC4PcHImQpllR8/dXAUPiosoYfLLtssKg5L7v4cCz9qPuI2n1XSmBvzYYcqc3sTZ2AL+dylOjk5NlxedrJzEiLsDlWf4r2jr4g3V4f9vzIG6GL5hVR9vTbJJlNoSLvwokO0tIiT4retk5sYzMHi3bFO8dHHRG/pfeHIMtRhim5q57kzv66SQQjGP1e7fXNe6j2tlHtbaM13cytP1sWoTM2z07J6mJqWvv0Nn+4l+MnT0fxRkQ5KyIbYpGAWDu7Jgo1rEsMNE2jZNXVQ+pdMKOAC2YU9AW3MeFVU5+blbw9nkJUIkkW7/pAW2YxQrE/KbO2N23SbIA06xjWv/sRyclJZFrSyLSmkWFJJSs9DZ+vK9GgwlBT28hpVxutvi5a2zpp9XXR1X0Gl/dsphVRT4osilx0gzDkCVGp3aYmT89e4OIBWTBo4GvtwOftoNXdTrvXR2dbJ4tvvXJYJOqqGzh+sAFrtgVrpgWrLR2rzcKYtNTBagcctpzZ8Q5VCREBcHq2XY5iN8O4PjpPCBiwcLy9ZMi8n9AkzbOVfIzi0W8e1/CgRB5JhAQMY49y2IvXAS+POKphQ14ad+z1av8Xt7cFKm+7fijthImIiHLYfGv4r5CRlxy29rWoYF/qVNqQKXRkl9je8t+geJzzv2YCSuSRfFvxU8M1HPHfCo3u7QsE40Vgxkh9hEPtN5CfJLomzsU3+qNHqcqkU96We5Ti10DBCN3Ui6gnc7PGvjxUio2HYRF59ff324N+/48MFXx1denfPANypSqTnN7mYk3JHUpxNUJOXEeKFoSdmmhvjMsylw+12SWCYc1x40zgToE/aqIDPDcg7/+SW4AtSilpdG0tFNGLNE3lGygLgIb4jCAnFUZNfvZ1tcP9I+e8EgkSeEVHNwwVfC2WTn+Ah/t/oxjFKEZxfvEfFSF6TQ5EeJwAAAAASUVORK5CYII=" }/> 
          
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


 