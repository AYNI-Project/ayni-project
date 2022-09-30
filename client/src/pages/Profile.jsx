import React from "react";
import { Typography, Button, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Appbar from "../components/appbar";
import { InputForm, LeftContent, RightContent, Subtitle, View } from "../styles/auth";
import { useState, setState } from "react";

export default function Profile() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [picture, setPicture] = useState('');
  
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "city"){
      setCity(value);
    }
     if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }
    if(id === "aboutMe"){
      setAboutMe(value);
    }
    if(id === "picture"){
      setPicture(value);
    }

}

const handleSubmit  = () => {
    console.log(name,lastName,city,email,password,confirmPassword,aboutMe,picture);
}
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
            value={name}
            onChange = {(e) => handleInputChange(e)}
          />
          <InputForm
            type={"text"}
            id="lastName"
            label="Apellido"
            variant="standard"
            value={lastName}
            onChange = {(e) => handleInputChange(e)}
          />
          <InputForm
            type={"text"}
            id="city"
            label="Ciudad"
            variant="standard"
            value={city}
            onChange = {(e) => handleInputChange(e)}
          />
          <InputForm
            type={"email"}
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange = {(e) => handleInputChange(e)}
          />
          <InputForm
            type="password"
            id="password"
            label="Contraseña"
            variant="standard"
            value={password}
            onChange = {(e) => handleInputChange(e)}/>
          
          <InputForm
            type="password"
            id="confirmPassword"
            label="Confirmar Contraseña"
            variant="standard"
            value={confirmPassword}
            onChange = {(e) => handleInputChange(e)}
          />
        </LeftContent>
        <RightContent>
          <InputForm
            id="aboutMe"
            label="Sobre mi"
            multiline
            rows={3}
            variant="standard"
            value={aboutMe}
            onChange = {(e) => handleInputChange(e)}
          />
           <IconButton
            color="inherit"
            aria-label="picture"
            component="label"
            variant= 'text'
            style={{padding: "2rem"}}
            value={picture}
            onChange = {(e) => handleInputChange(e)}
          >
            <Typography style={{ color: "#696969",paddingRight: "2rem" }}>Elige una foto de perfil</Typography>
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>         
          <Box style={{ padding: "2rem" }}>
            <Button type="submit" variant="outlined" color='inherit' style={{backgroundColor:"#FFA37F"}} onClick={()=>handleSubmit()}>
              Guardar perfil
            </Button>
          </Box>
        </RightContent>
      </View>
    </>
  );
}
