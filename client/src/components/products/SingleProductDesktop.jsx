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

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useReducer, useEffect } from "react";

export default function SingleProductDesktop({ product, matches }) {
  const [showOption, setShowOption] = useState(false);
  const [favorites, setFavorites] = useReducer([]);

  const handleMouseEnter = () => {
    setShowOption(true);
  };
  const handleMouseLeave = () => {
    setShowOption(false);
  };

  useEffect(() => {
    setFavorites(product);
  });

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon onClick={handleFavorite} />
        </ProductFavButton>
        {showOption && (
          <ProductAddToCart show={showOption} variant="contained">
            Me interesa
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showOption}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
