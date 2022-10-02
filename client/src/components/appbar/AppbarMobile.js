import { IconButton } from "@mui/material";
import { AppbarContainer, LogoImage } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/indexUi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function AppbarMobile({ matches }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();


   const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    return (
        <AppbarContainer> 
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Link to="/">
            <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
            </ Link>
            {/*<AppbarHeader textAlign={"center"} variant="h4">
                Ayni
            </AppbarHeader>*/}
            <IconButton  onClick={() => setShowSearchBox(true)} >
                <SearchIcon  />
                </IconButton>
            <LogoImage src="./images/banner/2.png" alt="logo-Ayni" 
            onClick={navigateToHome}/>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches}  />
        </AppbarContainer>
    )
}
