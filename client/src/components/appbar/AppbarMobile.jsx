import { IconButton } from "@mui/material";
import { AppbarContainer, LogoImage, AppbarHeader} from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/indexUi";
import { Link } from "react-router-dom";


import "@fontsource/poppins";


export default function AppbarMobile({ matches }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();



    return (
        <AppbarContainer  position="sticky" > 
            
            <IconButton onClick={() => setDrawerOpen(true)
           }>
                <MenuIcon />
            </IconButton>
          
            <Link to="/">
            <LogoImage src="./images/banner/logoAyni.png" alt="logo-Ayni" />
            </ Link>          
       
            <IconButton  onClick={() => setShowSearchBox(true)}  >                
                <SearchIcon />

            </IconButton>
           
         
            <Actions matches={matches}  />
        </AppbarContainer>
    )
}
