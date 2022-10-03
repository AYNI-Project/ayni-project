import React from "react";
import { Typography, Button, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Appbar from "../components/appbar";
import { InputForm, LeftContent, RightContent, Subtitle, View } from "../styles/auth";
import { useState} from "react";
import axios from 'axios'

export default function Profile() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [celNumber, setCelNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [picture, setPicture] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
       .put('https://ayni-project.herokuapp.com/user/edit/:id', {
          name: name,
          lastName: lastName,
          city: city,
          celNumber: celNumber,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          aboutMe: aboutMe,
          picture: picture


       })
       .then((res) => {
          setUser((user) => [res.data, ...user]);
          setName('');
          setLastName('');
          setCity('');
          setCelNumber('');
          setEmail('');
          setPassword ('');
          setConfirmPassword ('');
          setAboutMe ('');
          setPicture('')
       })
       .catch((err) => {
          console.log(err.message);
       });
 }; 


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
            onChange={(e)=> setName(e.target.value)}
          />
          <InputForm
            type={"text"}
            id="lastName"
            label="Apellidos"
            variant="standard"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
          />
          <InputForm
            type={"text"}
            id="city"
            label="Ciudad"
            variant="standard"
            value={city}
            onChange={(e)=> setCity(e.target.value)}
          />
          <InputForm
            type={"text"}
            id="celNumber "
            label="Teléfono Móvil"
            variant="standard"
            value={celNumber}
            onChange = {(e) => setCelNumber(e.target.value)}
          />
          <InputForm
            type={"email"}
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <InputForm
            type="password"
            id="password"
            label="Contraseña"
            variant="standard"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <InputForm
            type="password"
            id="confirmPassword"
            label="Confirmar Contraseña"
            variant="standard"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
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
            onChange={(e)=> setAboutMe(e.target.value)}
          />
           <IconButton
            color="inherit"
            aria-label="picture"
            component="label"
            variant= 'text'
            style={{padding: "2rem"}}
            value={picture}
            onChange={(e)=> setPicture(e.target.value)}
          >
            <Typography style={{ color: "#696969",paddingRight: "2rem" }}>Elige una foto de perfil</Typography>
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>         
          <Box style={{ padding: "2rem" }}>
            <Button className="btn" type="submit" variant="outlined" color='inherit' style={{backgroundColor:"#FFA37F"}} onClick={handleSubmit}>
              Guardar perfil
            </Button>
          </Box>
        </RightContent>
      </View>
          </>
  );
}

/*onClick={()=>handleSubmit()}

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

}*/