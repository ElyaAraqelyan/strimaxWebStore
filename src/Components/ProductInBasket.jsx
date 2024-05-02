import React from "react";
import styles from "../styles/App.module.css";
import Star from "../assets/icons/star.svg";
import Basket from "../assets/icons/basket.svg";
import MyButton from "../UI/MyButton";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/Products/productsSlice";

const ProductInBasket = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    alert("Succeeded");
    dispatch(removeFromBasket(product?.id));
  };
  const handleDelete = () => {
    dispatch(removeFromBasket(product?.id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <img src={product?.image} alt="" />
      </div>
      <div className={styles.middle}>
        <p className={styles.price}>
          {Math.round(product?.price * 0.9)}&nbsp;$
        </p>
        <p className={styles.condition}>With SM wallet</p>
        <p className={styles.title}>{product?.title}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.rating}>
          <p className={styles.rate}>
            <img src={Star} alt="" />
            {product?.rating?.rate}
          </p>
          <p>• {product?.rating?.count} rates</p>
        </div>
        <div className={styles.basket}>
          <MyButton onClick={handleClick}>
            <img src={Basket} alt="" />
            <p>Buy</p>
          </MyButton>
          <MyButton onClick={handleDelete}>
            <img src={Basket} alt="" />
            <p>Delete From Basket</p>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductInBasket;
