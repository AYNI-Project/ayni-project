import React from 'react'
import { Typography, Box } from "@mui/material";
import Appbar from "../components/appbar";
import { LeftContent, View } from "../styles/auth";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {

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
