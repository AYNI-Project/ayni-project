// import { Box, Checkbox, FormControl,  FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
// import React from 'react'
// import { useEffect, useState } from 'react';
// import { dataList, ratingList } from '../../components/test/mock/dataList';

// import FilterPanel from './FilterPanel';


// export default function Profile() {
//   const [category, setCategory] = useState ({
//     programación: true,
//     tecnologia: false,
//     musica: false,
//     idiomas: false,
//     deporte: false,
//     arte: false,
//     cocina: false,
//     más: false,

//   });
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [list, setList] = useState(dataList);

//   const handleChange = (event) => {
//     setCategory({
//       ...category,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const { programación,
//     tecnologia,
//     musica,
//     idiomas,
//     deporte,
//     arte,
//     cocina,
//     más} = category;
  
// // Rating
  
// const handleSelectRating = (event, value) =>
// !value ? null : setSelectedRating(value);

//   const applyFilters = () => {
//     let updatedList = dataList;
   
//     // Rating Filter
//     if (selectedRating) {
//       updatedList = updatedList.filter(
//         (item) => parseInt(item.rating) === parseInt(selectedRating)
//       );
//     }
//     // Category Filter
//     const categoryChecked = category
//       .filter((item) => item.checked)
//       .map((item) => <item className="categoria_id"></item>.toLowerCase());

//     if (categoryChecked.length) {
//       updatedList = updatedList.filter((item) =>
//         categoryChecked.includes(item.categoria)
//       );
//     }}

//     useEffect(() => {
//       applyFilters();
//     }, [selectedRating, category]);
  

//   return (
//     <>
//     <Box sx={{ display: 'flex' }}>
     
//       <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      
//         <FormLabel component="legend">Categorias</FormLabel>
//         {dataList.map(( categoria_id) => (
//         <FormGroup key={categoria_id}>
        
//           <FormControlLabel
//             control={
//               <Checkbox checked={programación} onChange={handleChange} name="programación" />
//             }
//             label="Programación"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={musica} onChange={handleChange} name="musica" />
//             }
//             label="Musica"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={tecnologia} onChange={handleChange} name="tecnologia" />
//             }
//             label="Tecnología"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={idiomas} onChange={handleChange} name="idiomas" />
//             }
//             label="idiomas"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={deporte} onChange={handleChange} name="deporte" />
//             }
//             label="deporte"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={arte} onChange={handleChange} name="arte" />
//             }
//             label="arte"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={cocina} onChange={handleChange} name="cocina" />
//             }
//             label="cocina"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={más} onChange={handleChange} name="más" />
//             }
//             label="más"
//           />
          
        
//         </FormGroup>
   
//    ))}  </FormControl>
//       <>
//       <Box className='input-group'>
//       <Typography className='label'>Star Rating</Typography>
//       <FilterPanel
//          selectedRating={selectedRating}
//          selectRating={handleSelectRating}
//          category={category}
         
//       />
//         </Box>
//         </>
  
//   </Box>
//         </>
//   )
// }
