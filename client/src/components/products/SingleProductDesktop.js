import { Stack } from "@mui/material";
import {
    ExtraActionsWrapper,
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
    ProductMetaWrapper,
  } from "../../styles/products";
  import ProductMeta from "./ProductMeta";
  
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

export default function SingleProductDesktop ({product, matches}) {
    const [showOption, setShowOption] = useState (false);
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
            
            <ProductFavButton isfav={0}>
                <FavoriteIcon />
            </ProductFavButton>
                {showOption && <ProductAddToCart show={showOption} variant = "contained" >Chat</ProductAddToCart>}
            
            <ProductActionsWrapper show={showOption}>
                <Stack direction= "column">
                    <ProductActionButton >
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches}/> 
        </>
    )
} 