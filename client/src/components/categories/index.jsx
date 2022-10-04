import { Container, Grid, useMediaQuery } from "@mui/material";
import { categories } from "../../data";
import SingleCategory from "./SingleCategory";
import { useTheme } from "@mui/material/styles";
import SingleCategoryDesktop from "./SingleCategoryDesktop";

export default function Categories() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
       <SingleCategory />
      </Grid>
    </Container>
  );
}