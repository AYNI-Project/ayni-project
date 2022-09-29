import React from "react";
import { Typography, Button, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Appbar from "../components/appbar";
import { InputForm, LeftContent, RightContent, Subtitle, View } from "../styles/auth";
export default function Profile() {
  return (
    <>
      <Appbar />
      <View>
        <LeftContent>
          <Subtitle>EDITAR PERFIL</Subtitle>
          <InputForm
            type={"text"}
            id="name"
            label="Nombre"
            variant="standard"
          />
          <InputForm
            type={"text"}
            id="last-name"
            label="Apellido"
            variant="standard"
          />
          <InputForm
            type={"text"}
            id="city"
            label="Ciudad"
            variant="standard"
          />
          <InputForm
            type={"email"}
            id="email"
            label="Email"
            variant="standard"
          />
          <InputForm
            type="password"
            id="password"
            label="Contraseña"
            variant="standard"
          />
          <InputForm
            type="password"
            id="confirm-password"
            label="Confirmar Contraseña"
            variant="standard"
          />
        </LeftContent>
        <RightContent>
          <InputForm
            id="about-me"
            label="Sobre mi"
            multiline
            rows={3}
            variant="standard"
          />
           <IconButton
            color="inherit"
            aria-label="upload picture"
            component="label"
            variant= 'text'
            style={{padding: "2rem"}}
          >
            <Typography style={{ color: "#696969",paddingRight: "2rem" }}>Elige una foto de perfil</Typography>
            
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>         
          <Box style={{ padding: "2rem" }}>
            <Button type="submit" variant="outlined" color='inherit' style={{backgroundColor:"#FFA37F"}}>
              Guardar perfil
            </Button>
          </Box>
        </RightContent>
      </View>
    </>
  );
}

 <IconButton
            color="inherit"
            aria-label="upload picture"
            component="label"
            variant= 'text'
          >Elige una foto de perfil
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>