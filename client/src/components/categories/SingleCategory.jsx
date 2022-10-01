import { Product, CategoryImage } from "../../styles/products";
import ProductMeta from "./CategoriesMeta";
import { Link } from "react-router-dom";

export default function SingleCategory({ categories, matches }) {

  return (
    <>
      <Link className="link" to="/knowhow">
        <Product>
          <CategoryImage src={categories.image} />
          <ProductMeta categories={categories} matches={matches} />
        </Product>
      </Link>
    </>
  )
} 