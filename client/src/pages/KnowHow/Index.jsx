import { Stack, Container, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Grid } from '@mui/material'
import React from 'react';

import Appbar from "../../components/appbar";
import SingleKnowHow from './SingleKnowHow';
import { knowledge } from "../../components/test/mock/conocimientos.jsx"
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CategoryMenu from "./CategoryMenu";
import SearchBar from '../../components/searchBar/SearchBar'
import { useState } from 'react';
import { UIProvider } from '../../context/indexUi'

export default function Exchanges() {

 

  return (
    <Box>

      <Appbar />
      
      
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <CategoryMenu />
        <SingleKnowHow />



      </Stack>

    </Box>

  )
}


{/* 
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = knowledge.map((knows) => (
    <Grid item key={knows.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
       <SingleKnowHow knows={knows} matches={matches} />
       {/*{{matches ? (
        <SingleKnowHow knows={knows} matches={matches} />
      ) : (
        <SingleKnowHowDesktop knows={knows} matches={matches} />
      )}
    </Grid>
  ));
    
      CATÁLOGO DE CONOCIMIENTOS
   
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '5BBCC0' }} flex={1}
   p={2}
   sk={{ display: { xs:"none", sm: "block"}}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Programación" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Tecnología" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Música" />
            </ListItemButton>
          </ListItem>   
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Deporte" />
            </ListItemButton>
          </ListItem>   
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Idioma" />
            </ListItemButton>
          </ListItem>   
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Cocina" />
            </ListItemButton>
            </ListItem>            
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Arte" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Más" />
            </ListItemButton>
          
          </ListItem>
        </List>
      </nav>
   
   </Box>
   <SingleKnowHow />
   */}