import { useState, useEffect } from 'react';
import { knowledge } from "../../data/conocimientos"
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Stack } from '@mui/material';
import { Exchange, ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeMetaWrapper, ExchangeActionsWrapper } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "@fontsource/poppins";

export default function SingleKnowHow(matches) {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id_usuario_conocimiento) {
    const newFavorites = favorites.map(item => {
      return item.id_usuario_conocimiento === id_usuario_conocimiento ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <Box flex={4} p={2} >
      <Exchange>
        <Grid container spacing={2}>
          {knowledge.map((item, i) => {
            return (
              <Grid key={i} item xs={6} sm={4} md={3}  >
                <Card sx={{ maxWidth: 345, mb: 5, height: 370 }}>
                  <CardActionArea>
                    <CardMedia>
                      <ExchangeImage src={item.foto} />
                    </CardMedia>
                    <CardContent>
                      <ExchangeMetaWrapper>
                        <Typography variant={matches ? "h6" : "h5"} sx={{ fontFamily: "Poppins", fontWeight: 700 }}>
                          {item.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:"justify"}}>
                          {item.descripcion}
                        </Typography>
                      </ExchangeMetaWrapper>
                      <FavoriteIcon
                          onClick={() => {
                            handleFavorite(item.id_conocimientos_usuario);
                          }}
                        >
                          {item.favorite === true ? "Remove" : "Add"}
                        </FavoriteIcon>
                    </CardContent>
                  </CardActionArea>
                  <ExchangeActionsWrapper>
                    <Stack direction="row">
                      <ExchangeFavButton isfav={0}>
                        <FavoriteIcon color="secondary" onClick={() => {
                          handleFavorite(item.id_usuario_conocimiento);
                        }}>{item.favorite === true ? "Remove" : "Add"}
                        </FavoriteIcon>
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