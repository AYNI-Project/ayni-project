import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";
import "@fontsource/poppins";
import SearchBar from "../searchBar/SearchBar";
import { UIProvider } from '../../context/indexUi';



export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
         <UIProvider>
      {matches ? (
        <AppbarMobile position="static" matches={matches} />
      )  : (
        <AppbarDesktop position="static" matches={matches} />
      )}
       <SearchBar />
       </UIProvider>
    </>
  );
}


