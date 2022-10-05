import React from "react";
import "../App.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  TableContainer,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Container } from "@mui/system";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Appbar from "../components/appbar";
import "@fontsource/poppins";
import Footer from "../components/footer/Footer";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Probando() {


    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const history = useHistory();
 
    // const saveProduct = async (e) => {
    //     e.preventDefault();
    //     await axios.post(`http://localhost:3001/`,{
    //         title: title,
    //         price: price
    //     });
    //     history.push("/");
    // }
  return (
    <div className="b">
      <Appbar />

      <Grid>
        <Card
          style={{ maxWidth: 600, padding: "20px 30px", margin: "70px auto" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              align="center"
              color="secondary"
              sx={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              ¿Qué quieres ofrecer?
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Titulo
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type="Titulo"
                    placeholder="Cómo usar google.."
                    label="Cómo usar google.."
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Estado"
                    label="Disponible"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Categoría"
                    label="Tecnología"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                <AddPhotoAlternateOutlinedIcon sx={{ fontSize: "large"}} />
                  <TextField
                    label="Descripción"
                    multiline
                    rows={4}
                    placeholder="Puedo intercambiar una hora de cómo.."
                    variant="outlined"
                    fullWidth
                    required
                  />
                     
                </Grid>
                <Grid item xs={12}>
                  
               
                  <TextField
                    type="Titulo"
                    placeholder="subir"
                    label="Sube una foto o elige de nuestro armario"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      color: "primary",
                    }}
                    fullWidth
                  >
                    Cancelar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      color: "whitesmoke",
                    }}
                    fullWidth
                  >
                    Agregar
                  </Button>
         
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </div>
  );
}

export default Probando;
