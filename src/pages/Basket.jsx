import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/Products/productsSlice";
import styles from "../styles/App.module.css";
import ProductInBasket from "../Components/ProductInBasket";

const Basket = () => {
  const products = useSelector(selectProducts);

  const inBasket = products.filter((product) => product.added);

  return (
    <div className={styles.products}>
      {inBasket.length > 0 ? (
        inBasket.map((product) => (
          <ProductInBasket key={product?.id} product={product} />
        ))
      ) : (
        <h1 className={styles.text}>There are no items in Basket</h1>
      )}
    </div>
  );
};

export default Basket;
