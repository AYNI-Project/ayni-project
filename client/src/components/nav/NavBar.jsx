import { AppBar, Toolbar, IconButton } from "@mui/material";
import '../nav/NavBar.css';

function Navbar() {

    // const location = useLocation().pathname

    return (
        <nav>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='medium' edge='start' color='white' aria-label='logo'>Logo</IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Navbar;