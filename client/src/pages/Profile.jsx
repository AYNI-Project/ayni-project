import React from 'react'
import { Typography, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Appbar from "../components/appbar";
import { LeftContent, RightContent, Subtitle, View } from "../styles/auth";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {

    const [user, setUser] = useState([]);
    const id = localStorage.getItem('id')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BACKEND_URL + `/users/:id${id}`)
            .then(res => {
                setData(res.data);
                setLoading(false)
            })
    }, [id])

    const getUser = data;

    if (loading) return <section>Cargando...</section>

    return (
        <>
          <Appbar />
            <View>
                <LeftContent>
                    {getUser.map((user, index) => (
                        <Box key={index}>
                            <Typography>{user.nombre}</Typography>
                        </Box>))}
                </LeftContent>
            </View>
        </>)
};

{/* <Typography
            type={"text"}
            id="city"
            label="Ciudad"
            variant="standard"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
          <Typography
            type={"text"}
            id="celNumber "
            label="Teléfono Móvil"
            variant="standard"
            value={user.celNumber}
            onChange={(e) => setUser({ ...user, celNumber: e.target.value })}
          />
          <Typography
            type={"email"}
            id="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Typography
            type="password"
            id="password"
            label="Contraseña"
            variant="standard"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <Typography
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
          <Typography
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
  )
} */};
