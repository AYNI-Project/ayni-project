import React from 'react'
import { Typography, Button, Box} from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Appbar from '../components/appbar';
import { LeftContent, RightContent, View } from '../styles/auth'

export default function Profile() {
  return (
    <>
    <Appbar/>
    <View>
      
     <LeftContent>
      <Typography>EDITAR PERFIL</Typography>
      <TextField type={'text'} id="name" label="Nombre" variant="standard"  />
      <TextField type={'text'} id="last-name" label="Apellido" variant="standard"  />
      <TextField type={'text'} id="city" label="Ciudad" variant="standard" />
      <TextField type={'email'}id="email" label="Email" variant="standard" />
      <TextField type="password" id="password" label="Contraseña" variant="standard" />
      <TextField type="password" id="confirm-password" label="Confirmar Contraseña" variant="standard" />
     </LeftContent>
      <RightContent>
      <TextField
          id="about-me"
          label="Sobre mi"
          multiline
          rows={4}
          variant="standard"
        />
       
       <TextField type={'text'} id="profile-picture" label="Elige una foto de perfil" variant="standard" />
       <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
        </IconButton> 
           
      <Box style={{padding:'2rem'}}>
        <Button type="submit" variant="outlined">Guardar perfil</Button>
      </Box>
      </RightContent>
      </View>
      </> 
  )
}
/*
<Typography endIcon={<PhotoCamera />}>
Elige una foto de perfil
<input hidden accept="image/*" multiple type="file" />
</Typography> 
*/