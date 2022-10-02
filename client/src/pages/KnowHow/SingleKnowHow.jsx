import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea , Stack} from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { knowledge } from "../../components/test/mock/conocimientos.jsx"
import { Exchange, ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeAddButton, ExchangeMetaWrapper, ExchangeActionsWrapper  } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import "@fontsource/poppins"; 
import { useEffect } from 'react';


export default function SingleKnowHow({matches}) {
//PAGINATION
//let [pageNumber, setPageNumber] = useState(1)
let [getKnowledge, setGetknowledge] = useState ([]);

// const URL =`url`


useEffect(() => {
  axios
  .get("/db/2dataList.json")
  .then((res) =>{ setGetknowledge(res.data.results);
    console.log(res.data.results)})
  .catch((err) => console.log(err));
  }
,[])
  

  

  
 
  return (
    <Box flex={4} p={2} >
        <Exchange>
        <Grid container spacing={2}>
            {
           
                getKnowledge.map( (knows) => {
                  //let {id_usuario_conocimiento, titulo, descripcion, foto} = knows;
                  if (getKnowledge) {         
                
                    return (
        <Grid key={knows.id_usuario_conocimiento} item xs={6}sm = {4} md ={3}  >
        <Card sx={{ maxWidth: 345 , mb: 5, height: 370 }}>
      <CardActionArea>
        <CardMedia>
        <Link to='/knowhow/detail' >
          <ExchangeImage src={knows.foto} />
          </Link>
        </CardMedia>
        <CardContent>
            <ExchangeMetaWrapper>
          <Link to='/knowhow/detail' >
          <Typography variant={matches ? "h6" : "h5"} sx={{ fontFamily: "Poppins", fontWeight: 700}}
>
            {knows.titulo}
          </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
           {knows.descripcion}
           </Typography>
           </ExchangeMetaWrapper>
        </CardContent>
      </CardActionArea>
      <ExchangeActionsWrapper>
      <Stack direction= "row">
                    <ExchangeFavButton isfav= {0}> 
                    <FavoriteIcon color="secondary" />
                    </ExchangeFavButton>
                    <ExchangeActionButton>
                        <ShareIcon color="secondary" />
                    </ExchangeActionButton>
                   
                </Stack>
      </ExchangeActionsWrapper>
    </Card> 
   

    </Grid>
     )} 
      return <>
      <Typography> "No Characters Found :/"</Typography>
      </>
    })        
                
            
  }
        </Grid>  
  
        
        </Exchange>  
        
    </Box>
        
   
    
  )
}




{/*   <Box bgcolor="blue" flex={4} p={2} >*/}