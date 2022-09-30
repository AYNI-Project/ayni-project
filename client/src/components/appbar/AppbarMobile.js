import { IconButton } from "@mui/material";
import { AppbarContainer, LogoImage } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useNavigate } from "react-router-dom";

export default function AppbarMobile({ matches }) {

    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    return (
        <AppbarContainer> 
            <IconButton>
                <MenuIcon />
            </IconButton>
            <LogoImage src="./images/banner/2.png" alt="logo-Ayni" 
            onClick={navigateToHome}/>
            {/*<AppbarHeader textAlign={"center"} variant="h4">
                Ayni
            </AppbarHeader>*/}
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches}  />
        </AppbarContainer>
    )
}
