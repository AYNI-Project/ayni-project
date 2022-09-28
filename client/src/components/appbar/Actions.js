import {
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  MyList,
} from "../../styles/appbar";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import "@fontsource/poppins";
import { Colors } from "../../styles/theme";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {}
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };
  const navigateToFavorite = () => {
    navigate("/favorites");
  };

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <EmailIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon onClick={navigateToFavorite} />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon onClick={(e) => setOpen(true)}/>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography>
                Hola, {user.displayName || user.email}{" "}
              </Typography>
              <MenuItem onClick={navigateToProfile}>Mi Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
            </Menu>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
