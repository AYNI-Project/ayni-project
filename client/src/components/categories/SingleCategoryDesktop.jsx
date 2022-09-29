import {
    Product,
    ProductAddToCart,
    ProductImage,
} from "../../styles/products";
import CategoryMeta from "./CategoriesMeta";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SingleCategoryDesktop({ categories, matches }) {
    const [showOption, setShowOption] = useState(false);
    const handleMouseEnter = () => {
        setShowOption(true);
    }
    const handleMouseLeave = () => {
        setShowOption(false);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={categories.image} />
                {showOption && <ProductAddToCart show={showOption} variant="contained" ><Link className="link" to='/knowhow'>Me interesa</Link></ProductAddToCart>}
                {/* <ProductActionsWrapper show={showOption}>
                </ProductActionsWrapper> */}
            </Product>
            <CategoryMeta categories={categories} matches={matches} />
        </>
    )
} 