import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasketOnlyItem,
  fetchProductByIdAsync,
  selectProductById,
} from "../features/Products/productsSlice";
import { useParams } from "react-router-dom";
import Star from "../assets/icons/star.svg";
import Basket from "../assets/icons/basket.svg";
import styles from "../styles/ProductByID.module.css";
import MyButton from "../UI/MyButton";

const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProductById);
  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToBasketOnlyItem());
  };

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product?.image} alt="" />
      </div>
      <div className={styles.middle}>
        <p className={styles.category}>{product?.category}</p>
        <p className={styles.title}>{product?.title}</p>
        <div className={styles.rating}>
          <div className={styles.rate}>
            <img src={Star} alt="" />
            <p className={styles.rateText}>{product?.rating.rate}</p>
          </div>
          <p>• {product?.rating.count} rates</p>
        </div>
        <p className={styles.description}>{product?.description}</p>
      </div>
      <div className={styles.left}>
        <div className={styles.priceDiv}>
          <p className={styles.pricePromotion}>
            {Math.round(product?.price * 0.9)}&nbsp;$
          </p>
          <p className={styles.price}>{product?.price}&nbsp;$</p>
        </div>
        <p className={styles.condition}>With SM wallet</p>

        <div className={styles.basket}>
          <MyButton onClick={handleClick}>
            <img src={Basket} alt="" />
            <p>To Basket</p>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
