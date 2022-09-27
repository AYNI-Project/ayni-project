import { Stack } from "@mui/material";
import { knowledge } from "../../components/test/mock/knowledge .jsx"
import { Exchange, ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeAddButton, ExchangeMetaWrapper, ExchangeActionsWrapper  } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';



export default function SingleProductDesktop ({Exchange, matches}) {
    const [showOption, setShowOption] = useState (false);
    const handleMouseEnter = () => {
        setShowOption(true);
    }
    const handleMouseLeave = () => {
        setShowOption(false);
    }
        
        return (
        
        <Exchange onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
       
        <Card sx={{ maxWidth: 345 , mb: 5 }}>
      <CardActionArea>
        <CardMedia>
        <ExchangeImage src={knows.foto} 
          /*component="img"
          height="20%"
          image="./images/products/tecnologia.png"
          alt="green iguana"*/
        />
        </CardMedia>
        <CardContent>
            <ExchangeMetaWrapper>
          <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
            {knows.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {knows.descripcion}
           </Typography>
           </ExchangeMetaWrapper>
        </CardContent>
      </CardActionArea>
      <ExchangeFavButton isfav= {0}> 
                    <FavoriteIcon color="secondary" />
                    </ExchangeFavButton>
                    {showOption && <ExchangeAddButton show={showOption} variant = "contained" >Me interesa</ExchangeAddButton>}
      <ExchangeActionsWrapper>
      <Stack direction= "column">
                    
                    <ExchangeActionButton>
                        <ShareIcon color="secondary" />
                    </ExchangeActionButton>
                   
                </Stack>
      </ExchangeActionsWrapper>
    </Card>

   
        </Exchange>  

        
   
    
  )
}


{/*<Box bgcolor="blue" flex={4} p={2} >
        <Exchange onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <Grid container spacing={2}>
            {
                knowledge.map(knows => {
                    return (
        <Grid key={knows.id_usuario_conocimiento} item xs={6}sm = {4} lg ={3}  >
        <Card sx={{ maxWidth: 345 , mb: 5 }}>
      <CardActionArea>
        <CardMedia>
        <ExchangeImage src={knows.foto} 
          /*component="img"
          height="20%"
          image="./images/products/tecnologia.png"
          alt="green iguana"
          />
          </CardMedia>
          <CardContent>
              <ExchangeMetaWrapper>
            <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
              {knows.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {knows.descripcion}
             </Typography>
             </ExchangeMetaWrapper>
          </CardContent>
        </CardActionArea>
        <ExchangeFavButton isfav= {0}> 
                      <FavoriteIcon color="secondary" />
                      </ExchangeFavButton>
                      {showOption && <ExchangeAddButton show={showOption} variant = "contained" >Me interesa</ExchangeAddButton>}
        <ExchangeActionsWrapper>
        <Stack direction= "column">
                      
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
*/}

        
        
       
    
