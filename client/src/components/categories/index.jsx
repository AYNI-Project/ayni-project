import { Container, Grid, Box, Typography } from "@mui/material";
import SingleCategory from "./SingleCategory";

export default function Categories() {

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}>
        <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "30px 0px" }}>
          <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold" }}> ¿Qué quieres intercambiar? </Typography>
        </Box>
        <SingleCategory />
      </Grid>
    </Container>
  );
}