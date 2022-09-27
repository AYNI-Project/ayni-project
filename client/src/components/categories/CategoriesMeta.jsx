import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";

export default function CategoriesMeta({ categories, matches }) {
    return (
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {categories.name}
        </Typography>
      </ProductMetaWrapper>
    );
}