import { IconButton } from "@mui/material";
import { AppbarContainer, LogoImage } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/indexUi";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

export default function AppbarMobile({ matches }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Link to="/">
                <LogoImage src="./images/banner/2.png" alt="logo-Ayni" />
            </ Link>
            <IconButton onClick={() => setShowSearchBox(true)} >
                <SearchBar />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}
