import {
  Product,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./CategoriesMeta";

export default function SingleCategory({ product, matches }) {

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
      </Product>
      {/* <ProductAddToCart variant="contained">Me interesa</ProductAddToCart> */}
    </>
  )
} 