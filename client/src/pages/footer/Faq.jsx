import React from 'react';
import { Typography } from '@mui/material';
import { LeftContent, RightContent, View } from '../../styles/auth';

export default function Faq() {
  return (
    <View>
      <LeftContent>
      Preguntas frecuentes
      </LeftContent>
      <RightContent>
      <Typography> 1. ¿Cómo me registro?
      </Typography>
      </RightContent>
    </View>
  )
}
