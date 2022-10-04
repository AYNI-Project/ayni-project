import React from "react";
import { Typography, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Appbar from "../components/appbar";
import {
  InputForm,
  LeftContent,
  RightContent,
  Subtitle,
  View
} from "../styles/auth";
import { useState } from "react";
import axios from "axios";

export default function EditProfile() {

  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_BACKEND_URL + "user/edit/:id", { user })
      .then((res) => {
        console.log(res.data);
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
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <InputForm
            type={"text"}
            id="lastName"
            label="Apellidos"
            variant="standard"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <InputForm
            type={"text"}
            id="city"
            label="Ciudad"
            variant="standard"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
          <InputForm
            type={"text"}
            id="celNumber "
            label="Teléfono Móvil"
            variant="standard"
            value={user.celNumber}
            onChange={(e) => setUser({ ...user, celNumber: e.target.value })}
          />
          <InputForm
            type={"email"}
            id="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <InputForm
            type="password"
            id="password"
            label="Contraseña"
            variant="standard"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <InputForm
            type="password"
            id="confirmPassword"
            label="Confirmar Contraseña"
            variant="standard"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
        </LeftContent>
        <RightContent>
          <InputForm
            id="aboutMe"
            label="Sobre mi"
            multiline
            rows={3}
            variant="standard"
            value={user.aboutMe}
            onChange={(e) => setUser({ ...user, aboutMe: e.target.value })}
          />
          <IconButton
            color="inherit"
            aria-label="picture"
            component="label"
            variant="text"
            style={{ padding: "2rem" }}
            value={user.picture}
            onChange={(e) => setUser({ ...user, picture: e.target.value })}
          >
            <Typography style={{ color: "#696969", paddingRight: "2rem" }}>
              Elige una foto de perfil
            </Typography>

            <input id="picture " hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Box style={{ padding: "2rem" }}>
            <button
              className="btn"
              type="submit"
              onClick={handleSubmit}
            >
              Guardar perfil
            </button>
          </Box>
        </RightContent>
      </View>
    </>
  );
}

