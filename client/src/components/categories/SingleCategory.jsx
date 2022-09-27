import {
  Product,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./CategoriesMeta";

export default function SingleCategory({ categories, matches }) {

  return (
    <>
      <Product>
        <ProductImage src={categories.image} />
        <ProductMeta categories={categories} matches={matches} />
      </Product>
    </>
  )
} 