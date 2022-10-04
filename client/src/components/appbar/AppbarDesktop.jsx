import { Stack, ListItemButton, ListItemIcon, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppbarContainer, MyList, LogoImage } from "../../styles/appbar";
import Actions from "./Actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/indexUi";
import { Link } from "react-router-dom";


export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();
  const navigate = useNavigate();

  const navigateToUploadProduct = () => {
    navigate("/uploadProduct");
  };
  //searchBar style appears

  return (
    <AppbarContainer position="static">
      <Link to="/">
        <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
      </Link>
      <MyList
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color="inherit"
          startIcon={<AddCircleOutlineIcon sx={{ paddingRight: "0.5em" }} />}
          onClick={navigateToUploadProduct}
        >
          Agregar trueque
        </Button>


        <IconButton size="large" aria-label="search" color="inherit" onClick={() => setShowSearchBox(true)}>
          <SearchIcon />
        </IconButton>

      </MyList>
      {/* <Stack direction="row" spacing={2} /> */}
      <Actions matches={matches} />

    </AppbarContainer>
  );
}
