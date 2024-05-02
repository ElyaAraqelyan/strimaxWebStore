import React from "react";
import styles from "../styles/App.module.css";
import Star from "../assets/icons/star.svg";
import Basket from "../assets/icons/basket.svg";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton";
import { useDispatch } from "react-redux";
import { addToBasket, deleteProduct } from "../features/Products/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToBasket(product?.id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product?.id));
  };

  return (
    <Link to={`/product/${product.id}`} className={styles.link}>
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
              {product.added ? <p>Done</p> : <p>To Basket</p>}
            </MyButton>
          </div>
          <MyButton onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
            <p>Delete</p>
          </MyButton>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
