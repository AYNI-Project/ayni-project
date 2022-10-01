import {
    Product,
    CategoryImage,
} from "../../styles/products";
import CategoryMeta from "./CategoriesMeta";
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';

export default function SingleCategoryDesktop({ categories, matches }) {
    return (
        <>
        <Link className="link" to="/knowhow">
            <Paper elevation={2} sx={{width:"220px", borderRadius:"10px"}}>
                <Product >
                    <CategoryImage src={categories.image} />
                </Product>
                <CategoryMeta categories={categories} matches={matches} />
            </Paper>
            </Link>
        </>
    )
} 