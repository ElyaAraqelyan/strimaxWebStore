import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductByCategoryAsync,
  selectProductByCategory,
} from "../features/Products/productsSlice";
import styles from "../styles/App.module.css";
import ProductItem from "../Components/ProductItem";
import Carousel from "../UI/Carousel";

const ProductsByCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProductByCategory);

  useEffect(() => {
    dispatch(fetchProductByCategoryAsync(category));
  }, [category]);

  return (
    <>
      {console.log(products)}
      <Carousel />
      <div className={styles.products}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsByCategory;
