import { ListItemButton, ListItemIcon,Menu, MenuItem } from "@mui/material";
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

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

    const [open, setOpen] = useState (false)
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
            <FavoriteIcon />
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
            <PersonIcon onClick={e=>setOpen(true)} />
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
