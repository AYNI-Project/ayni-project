import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Stack } from '@mui/material';
import { knowledge } from "../../data/knowledge"
import { ExchangeImage, ExchangeActionButton, ExchangeFavButton, ExchangeAddButton, ExchangeMetaWrapper, ExchangeActionsWrapper } from '../../styles/KnowHow/index.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function SingleProductDesktop({ Exchange, matches }) {
  const [showOption, setShowOption] = useState(false);
  let [getKnowledge, setGetknowledge] = useState([]);
  const [liked, setLiked] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleMouseEnter = () => {
    setShowOption(true);
  }
  const handleMouseLeave = () => {
    setShowOption(false);
  }

  useEffect(() => {
    axios
      .get("/db/2dataList.json")
      .then((res) => {
        setGetknowledge(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
  }

  function handleFavorite(id_conocimientos_usuario) {
    const newFavorites = favorites.map(knows => {
      return knows.id_conocimientos_usuario === id_conocimientos_usuario ? { ...knows, favorite: !knows.favorite } : knows;
    });
    setFavorites(newFavorites);
  }

  return (
    <Box flex={4} p={2}>
      <Exchange>
        <Grid container spacing={2}>
          {getKnowledge.map((knows) => {
            if (getKnowledge) {
              return (
                <Exchange onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                  <Card sx={{ maxWidth: 345, mb: 5, height: 400 }}>
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
                    <ExchangeFavButton isfav={0}>
                      {liked ? (<FavoriteBorderIcon onClick={handleNotification(1)}></FavoriteBorderIcon>) : (<FavoriteIcon color="secondary" onClick={() => {
                        handleFavorite(knows.id_usuario_conocimiento);
                      }}>{knows.favorite === true ? "Remove" : "Add"}
                      </FavoriteIcon>)}
                    </ExchangeFavButton>
                    {showOption && <ExchangeAddButton show={showOption} variant="contained" >Me interesa</ExchangeAddButton>}
                    <ExchangeActionsWrapper>
                      <Stack direction="column">
                        <ExchangeActionButton>
                          <ShareIcon color="secondary" />
                        </ExchangeActionButton>
                      </Stack>
                    </ExchangeActionsWrapper>
                  </Card>
                </Exchange>
              )
            }
            return <>
              <Typography> "No Characters Found :/"</Typography>
            </>
          })
          }</Grid>
      </Exchange>
    </ Box>
  )
}