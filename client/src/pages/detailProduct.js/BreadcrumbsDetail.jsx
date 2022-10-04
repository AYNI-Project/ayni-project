import { Link, useLocation } from 'react-router-dom'
//import "./breadcrumbs.css";


function Breadcrumbs() {
  const location = useLocation();
  return (
    <nav>
      <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/Knowledge"
        className={location.pathname.startsWith("/knowledge") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/knowledge/detail"
        className={location.pathname === "/knowledge/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Product 1
      </Link>
    </nav>
  );
}
export default Breadcrumbs;


// DA ESRRORO
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import useBreadcrumbs from 'use-react-router-breadcrumbs'

// const routes = [
//   { path: '/users/:userId', breadcrumb: 'Example 1' },
//   { path: '/data', breadcrumb: 'Example 2' }
// ];
// function BreadcrumbsDetail() {
//   const location = useLocation();
  
//   const breadcrumbs = useBreadcrumbs(routes);
//   console.log(breadcrumbs)
//   return (
//     <Link to="/">
//       {breadcrumbs.map(({ match, breadcrumb }) => (
//         <Link to={match.url} key={match.url} >
//           {breadcrumb} /
//         </Link>
//       ))}
//   </Link>
//   );
// }
// export default BreadcrumbsDetail;





// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';
// //import { Link } from 'react-router-dom';
// import {BrowserRouter as Router,
//   Route, 
//   useLocation} from "react-router-dom";


// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function BreadcrumbsDetail(props) {
//   const {
//     history,
//     location: { pathname }
//   } = props;
//   const location = useLocation();

//     const path = path.split("/").filter(x => x);
 
//     return (
//     <div role="presentation" onClick={handleClick}>
//       {/* <Breadcrumbs aria-label="breadcrumb" sx={{ m: 4 }}>
//         <Link
//           href='/'
//           underline="hover"
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="secondary">
//           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Home
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="secondary"
//           to="/knowledge"
//         >
//           <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Trueques
//         </Link>
//         <Typography
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="secondary"
//         >
//           <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//            id de conocimiento
//         </Typography>
//       </Breadcrumbs> */}
//       <div>
//         <>
//         <Breadcrumbs aria-label="breadcrumb">
//       {path.length > 0 ? (
//         <Link onClick={() => history.push("/")}>Home</Link>
//       ) : (
//         <Typography> Home </Typography>
//       )}
//       {path.map((name, index) => {
//         const routeTo = `/${path.slice(0, index + 1).join("/")}`;
//         const isLast = index === path.length - 1;
//         return isLast ? (
//           <Typography key={name}>Categorias</Typography>
//         ) : (
//           <Link key={name} onClick={() => history.push(routeTo)}>
//        Categorias
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
      
//         </>
      
//       </ div>
//     </div>
//   );
// }