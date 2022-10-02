import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
//import { Link } from 'react-router-dom';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs(knows) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ m: 4 }}>
        <Link
          href='/'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color= "secondary"

          
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
         Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color= "secondary"
         to="/knowHow"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Trueques
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color= "secondary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {knows.id_usuario_conocimiento} id de conocimiento
        </Typography>
      </Breadcrumbs>
    </div>
  );
}