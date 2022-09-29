import {
  IconButton,
  Box,
  ListItemText,
  Stack,
  ListItemButton,
  ListItemIcon,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppbarContainer,
  MyList,
  LogoImage,
} from "../../styles/appbar";
import Actions from "./Actions";
import "@fontsource/poppins";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {useNavigate } from 'react-router-dom';

export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  const navigateToUploadProduct = () => {
    navigate('/uploadProduct');
  }
  return (
    <AppbarContainer>
      <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
      <MyList sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
      <Box>
        <Button startIcon={< AddCircleOutlineIcon sx={{ paddingRight: "0.5em" }}/>} onClick={navigateToUploadProduct}>
        Agregar trueque
        </Button>
      </Box>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Stack direction="row" spacing={2}></Stack>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}