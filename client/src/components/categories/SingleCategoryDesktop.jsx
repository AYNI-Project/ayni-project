import {
    Product,
    ProductAddToCart,
    ProductImage,
} from "../../styles/products";
import ProductMeta from "./CategoriesMeta";
import { useState } from "react";

export default function SingleCategoryDesktop({ product, matches }) {
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
                <ProductImage src={product.image} />
                {showOption && <ProductAddToCart show={showOption} variant="contained" >Me interesa</ProductAddToCart>}
                {/* <ProductActionsWrapper show={showOption}>
                </ProductActionsWrapper> */}
            </Product>
            <ProductMeta product={product} matches={matches} />
        </>
    )
} 