import React from "react";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectSearchResult,
} from "../features/Products/productsSlice";
import ProductItem from "../Components/ProductItem";
import styles from "../styles/App.module.css";

const Products = () => {
  const searchResults = useSelector(selectSearchResult);
  const products = useSelector(selectProducts);
  const displayedProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <div className={styles.products}>
      {displayedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
