import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea , Stack} from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { knowledge } from "../../components/test/mock/conocimientos.jsx"
import { Exchange, ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeAddButton, ExchangeMetaWrapper, ExchangeActionsWrapper  } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';



import "@fontsource/poppins"; 


export default function SingleKnowHow(matches) {
 
  return (
    <Box flex={4} p={2} >
        <Exchange>
        <Grid container spacing={2}>
            {
                knowledge.map(knows => {
                    return (
        <Grid key={knows.id_usuario_conocimiento} item xs={6}sm = {4} md ={3}  >
        <Card sx={{ maxWidth: 345 , mb: 5, height: 370 }}>
      <CardActionArea>
        <CardMedia>
        <ExchangeImage src={knows.foto} 
       
        />
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
                )
                
                })
            }
            
        </Grid>  
        
        </Exchange>  
        
    </Box>
        
   
    
  )
}




{/*   <Box bgcolor="blue" flex={4} p={2} >*/}