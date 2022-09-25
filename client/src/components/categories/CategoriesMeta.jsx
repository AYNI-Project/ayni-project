import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";


export default function CategoriesMeta({ product, matches }) {
    return (
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
      </ProductMetaWrapper>
    );
}