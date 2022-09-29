import { IconButton } from "@mui/material";
import { AppbarContainer, LogoImage } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
export default function AppbarMobile({ matches }) {
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches}  />
        </AppbarContainer>
    )
}