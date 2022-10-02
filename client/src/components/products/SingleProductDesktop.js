import { Stack } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
  } from "../../styles/products";
  import ProductMeta from "./ProductMeta";
  
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

export default function SingleProductDesktop ({product, matches}) {
  
        return (
        <>
        
        <Product >
       
            <ProductImage src={product.image} />
                            
           
        </Product>
        <ProductMeta product={product} matches={matches}/> 
        </>
    )
} 