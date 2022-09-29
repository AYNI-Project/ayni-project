import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { LeftContent, RightContent, View, Subtitle } from '../../styles/auth';
import Footer from "../../components/footer/Footer";

export default function Faq() {
  return (
    <>
      <View>
        <LeftContent>
          <Subtitle>
            Preguntas frecuentes
          </Subtitle>
        </LeftContent>
        <RightContent>
          <Typography> 1. ¿Cómo me registro?
          </Typography>
          <Button sx={{ fontSize: "14px" }}><Link className="link" to="/login">
            Volver a la página de inicio de sesión </Link>
          </Button>
        </RightContent>
      </View>
      <Footer />
    </>
  )
}