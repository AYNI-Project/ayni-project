import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppbarContainer,
  MyList,
  LogoImage,
  BootstrapButton,
} from "../../styles/appbar";
import Actions from "./Actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/indexUi";
import { Link } from "react-router-dom";
import "@fontsource/poppins";

export default function AppbarDesktop({ matches }) {

  const { setShowSearchBox } = useUIContext();
  const navigate = useNavigate();

  const navigateToUploadProduct = () => {
    navigate("/knowledge/upload");
  };

  return (
    <AppbarContainer  >
      <Link to="/">
        <LogoImage src="./images/banner/logoAyni.png" alt="logo-Ayni" />
      </Link>
      <MyList
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "5em"
        }}
      >
        <IconButton
          size="large"
          aria-label="search"
          color='secondary'
          onClick={() => setShowSearchBox(true)}
        >
          <SearchIcon />
        </IconButton>
        <BootstrapButton
          variant="contained"
          startIcon={<AddCircleOutlineIcon sx={{ paddingRight: "0.5em" }} />}
          onClick={navigateToUploadProduct}
          className={"bootbtn"}
        >Agregar trueque
        </BootstrapButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
