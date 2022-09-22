import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";
import "@fontsource/poppins";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
