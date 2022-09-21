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
  import { Stack } from "@mui/material";
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';

export default function SingleProduct ({product, matches}) {
    return (
        <>
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches}/> 
            <ProductActionsWrapper>
                <Stack direction= "row">
                    <ProductFavButton isfav= {0}> 
                    <FavoriteIcon />
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                   
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">Me interesa</ProductAddToCart>
        </>
    )
} 