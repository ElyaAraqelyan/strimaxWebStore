import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import MyInput from "./MyInput";
import Woman from "../assets/icons/woman.svg";
import Man from "../assets/icons/man.svg";
import Electronic from "../assets/icons/electronic.svg";
import Jewelery from "../assets/icons/jewelery.svg";
import Basket from "../assets/icons/basket.svg";
import { useDispatch } from "react-redux";
import { search } from "../features/Products/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const rootClasses = [styles.categories];

  const dispatch = useDispatch();
  if (visible) {
    rootClasses.push(styles.active);
  }

  const handleOnChange = (e) => {
    dispatch(search(e.target.value));
  };
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo}>
            STRIMEX
          </NavLink>
        </div>
        <div className={styles.nav__bar}>
          <input
            type="checkbox"
            role="button"
            aria-label="Display the menu"
            className={styles.menu}
            onClick={handleClick}
          ></input>
        </div>
        <MyInput
          type="text"
          placeholder="Search..."
          onChange={handleOnChange}
        />
        <div className={styles.navbar__left}>
          <NavLink to="/basket">
            <div className={styles.icon}>
              <img src={Basket} alt="" />
              <p>Basket</p>
            </div>
          </NavLink>
          <NavLink to="/add">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCirclePlus} />
              <p>Add</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={rootClasses.join(" ")}>
        <NavLink to="category/men's clothing">
          <img src={Man} alt="" />
          Men's Clothing
        </NavLink>
        <NavLink to="category/jewelery">
          <img src={Jewelery} alt="" />
          Jewelery
        </NavLink>
        <NavLink to="category/electronics">
          <img src={Electronic} alt="" />
          Electronics
        </NavLink>
        <NavLink to="category/women's clothing">
          <img src={Woman} alt="" />
          Women's Clothing
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
