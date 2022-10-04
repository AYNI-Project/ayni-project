import React from 'react'
import {
    Box,
    Avatar,
    Typography,
    Stack,
    Rating,
    Button,
    Chip,
    Modal,
    Dialog,
    DialogTitle, DialogContent, DialogContentText, DialogActions, ListItemText, List, ListItem
  } from "@mui/material";
  import { styled } from '@mui/material/styles';
  import { Colors } from "../../styles/theme";
import { useState } from 'react';

export default function DialogDetail() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

  return (
    <div>
        <Button
              variant="contained"
              sx={{ fontFamily: "Poppins", color: "white" }}
              onClick={handleOpen}
            >
              Quiero Trueque
            </Button>
          
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         ¡Hey! Debes ofrecer algo de tu perfil para comenzar el Trueque.
         Elige:    
        </DialogTitle>
        <DialogContent>
        <List>
          <ListItem button>
            <ListItemText primary="Mi conocimiento uno"  />
          </ListItem>
        
          <ListItem button>
            <ListItemText
              primary="Mi conocimiento 2"
           
            />
          </ListItem>
        </List>
        </DialogContent>
         <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            Enviar Solicitud
          </Button>
        </DialogActions>
      </Dialog></div>
  )
}

