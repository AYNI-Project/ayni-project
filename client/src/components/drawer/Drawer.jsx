import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
  import { useUIContext } from "../../context/indexUi";
  import CloseIcon from "@mui/icons-material/Close";
  import { DrawerCloseButton } from "../../styles/appbar";
  import { lighten } from "polished";
  import { Colors } from "../../styles/theme/index";
  
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
  

  export default function AppMenu() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
  
    return (
      <>
        {drawerOpen && (
          <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon
              sx={{
                fontSize: "2.5rem",
                color: lighten(0.09, Colors.secondary),
              }}
            />
          </DrawerCloseButton>
        )}
        <Drawer open={drawerOpen} >
          <List>
            <ListItemButton>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Categorias</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Agrega trueque</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
          </List>
        </Drawer>
      </>
    );
  }