// import React from 'react';
// import { useEffect, useState } from 'react';
// import { knowledge } from "../../components/test/mock/conocimientos.jsx";

// export default function FilterCategory() {

//     const [mycategory, setMyCategory] = useState(null);

//     useEffect(() => {
//         const filterCategories = knowledge.filter(i => i.id_usuario_conocimiento.includes(mycategory))
//         console.log(filterCategories);
//         setMyCategory
//     })

//     if (loading) return <section>Cargando...</section>;

//     return (
//         <Box>
//             {filterCategories.map((categ, index) => (
//                 <Grid key={index} item xs={12} sm={6} md={4}>
//                     <Card sx={{ maxWidth: 330 }} style={{ height: "35rem" }}>
//                         <CardMedia component="img" height="370" alt="bici montaña" image={categ.foto} />
//                         <CardContent>
//                             <Link to={`/cartas/${categ.titulo}`} style={{ textDecoration: "none" }}>   <Typography variant="body1" style={{ fontWeight: "bold", color: "#4B7F55" }}>  {categ.descripcion}
//                             </Typography>
//                             </Link>
//                             <Stack direction="row" spacing={1}>
//                                 <Item>Chip One</Item>
//                                 <Item>Chip One</Item>
//                                 <Item>Chip One</Item>
//                             </Stack>
//                             <CardActions style={{ justifyContent: "space-between" }} >
//                                 <Button style={{ fontSize: "0.6rem", color: "#2F2F2F", fontWeight: "bold" }}>Reserva ahora</Button>
//                             </CardActions>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//                     </Box>
//     ))
// }
