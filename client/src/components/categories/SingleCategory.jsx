// import { Product, CategoryImage } from "../../styles/products";
import Paper from '@mui/material/Paper';
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Link } from "@mui/material";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function SingleCategory({ matches }) {
  let { id_categoria } = useParams
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(process.env.REACT_APP_BACKEND_URL + `category/${id_categoria}`);
        setCategories(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData({ id_categoria });
  }, [])

  return (
    <>
      {categories.map(knows => (
        <Link href={`knowledge/${knows.id_categoria}`}>
          <Paper elevation={2} sx={{ width: "220px", borderRadius: "10px" }}>
            <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
              {knows.nombre}
            </Typography>
          </Paper>
        </Link>
      ))}
    </>
)}