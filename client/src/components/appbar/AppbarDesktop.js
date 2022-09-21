import {
    Box,    ListItemText, Stack,
    ListItemButton, ListItemIcon,
    Typography, Button
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";

import { ActionIconsContainerMobile, ActionIconsContainerDesktop, AppbarContainer, AppbarHeader, MyList, LogoImage } from '../../styles/appbar'
import Actions from "./Actions";
import "@fontsource/poppins"; 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



export default function AppbarDesktop({ matches }) {
    
    return (

    <AppbarContainer  >
        <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
       {/* <AppbarHeader>Ayni</AppbarHeader>*/}
      
        <MyList   sx={{backgroundColor: "red", display:"flex", flexDirection:"row", justifyContent:"space-evenly" }}>
            <ListItemText primary ="Home" />           
             
                <AddCircleOutlineIcon sx={{paddingRight: "0.5em"}}/>
                
            <ListItemText  primary ="Agregar trueque" />
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />                  
                </ListItemIcon>
            </ListItemButton>
           
        </MyList>
        <Stack  direction ="row" spacing= {2} justify->
       </Stack>
        <Actions matches = {matches} />
    </AppbarContainer>
 
 )
}
