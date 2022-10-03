import {
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Slide,
  TextField,
  Typography,
  CardContent,
  Card,
  Grid,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/indexUi";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Exchange,
  ExchangeImage,
  ExchangeMetaWrapper,
} from "../../styles/KnowHow";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function SearchBar() {
  const { showSearchBox, setShowSearchBox } = useUIContext();
 
  let [search, setSearch] = useState([]);
  const [lookup, setLookup] = useState("");

  // const URL =`url`

  useEffect(() => {
    axios
      .get("/db/2dataList.json")
      .then((res) => {
        setSearch(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Busca un trueque aqui..."
          onChange={(e) => {
            setLookup(e.target.value);
          }}
        />
        {search
          .filter((index) => index.titulo.toLowerCase().includes(lookup))
          .map((index) => (
            lookup.length > 0 ?
            <Box>
            <Grid  item xs={12} md={6} spacing={2} key={index.id_usuario_conocimiento}>
            <Link to="/knowhow/detail">
                           <List>
                           <ListItem>
                               <ListItemText
                                 primary={index.titulo}
                                  underline="none"
                             sx={{ color: "white",
                            }}
                               />
                              </ListItem>
                          </List>
                          </Link>
                          </Grid>
                          </Box>
            :''))}
       
            {/* {/* return (
                <>
                  <Typography> "No Characters Found :/"</Typography>
                </>
              );
            })}
          </Grid>
        </Box>
      ))}
            <Box> 
              <Grid container spacing={2}>
               
                  //let {id_usuario_conocimiento, titulo, descripcion, foto} = index;
                  if (search) {
            //         return (
            //           //<Grid key={index.id_usuario_conocimiento}   >
            //           <Grid
            //             container
            //             spacing={2}
            //             key={index.id_usuario_conocimiento}
            //           >
            //             <Grid item xs={12} md={6}>
            //               <Link to="/knowhow/detail">
            //                 <List>
            //                   <ListItem>
            //                     <ListItemText
            //                       primary={index.titulo}
            //                       underline="none"
            //                       sx={{ color: "white" }}
            //                     />
            //                   </ListItem>
            //                 </List>
            //               </Link>
            //             </Grid>
            //           </Grid>

            //           //          <Card f>
            //           //        <CardActionArea>
            //           //          <CardMedia>
            //           //          <Link to='/knowhow/detail' >
            //           //            <ExchangeImage src={index.foto} />
            //           //            </Link>
            //           //          </CardMedia>
            //           //          <CardContent>
            //           //              <ExchangeMetaWrapper>
            //           //            <Link to='/knowhow/detail' >
            //           //            <Typography variant={matches ? "h6" : "h5"} sx={{ fontFamily: "Poppins", fontWeight: 700}}
            //           //  >
            //           //              {index.titulo}
            //           //            </Typography>
            //           //            </Link>
            //           //            <Typography variant="body2" color="text.secondary">
            //           //             {index.descripcion}
            //           //             </Typography>
            //           //             </ExchangeMetaWrapper>
            //           //          </CardContent>
            //           //        </CardActionArea>

            //           //      </Card>

            //           //      </Grid>
            //         );
            //       } */}
                  
        <Link to="/knowHow">
          <IconButton>
            <SearchIcon
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
              color="secondary"
            />
          </IconButton>
        </Link>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
}
