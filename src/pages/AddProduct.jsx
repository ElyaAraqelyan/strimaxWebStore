import React from "react";
import MyInput from "../UI/MyInput";
import styles from "../UI/FormInput.module.css";
import MyButton from "../UI/MyButton";
import { useDispatch, useSelector } from "react-redux";
import {
  postProductAsync,
  selectState,
  setCategory,
  setDescription,
  setImage,
  setPrice,
  setTitle,
} from "../features/Products/productsSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, price, description, category, image } =
    useSelector(selectState);

  const handleChangeTitle = (e) => {
    dispatch(setTitle(e.target.value));
  };
  const handleChangePrice = (e) => {
    dispatch(setPrice(e.target.value));
  };
  const handleChangeDescription = (e) => {
    dispatch(setDescription(e.target.value));
  };
  const handleChangeCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleChangeImage = (e) => {
    dispatch(setImage(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    };
    dispatch(
      postProductAsync({
        ...product,
        id: new Date().getTime().toString(),
        added: false,
        rating: {
          rate: 0,
          count: 0,
        },
      }),
      setTitle(""),
      setCategory(""),
      setDescription(""),
      setPrice(""),
      setImage("")
    );
    navigate("/");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit} to="/">
        <h1>Add your product</h1>
        <MyInput
          value={title}
          className={styles.input}
          placeholder="title"
          onChange={handleChangeTitle}
        />
        <MyInput
          value={price}
          type="number"
          className={styles.number}
          placeholder="price"
          onChange={handleChangePrice}
        />
        <MyInput
          value={description}
          className={styles.input}
          placeholder="description"
          onChange={handleChangeDescription}
        />
        <select
          className={styles.select}
          name="category"
          onChange={handleChangeCategory}
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <MyInput
          value={image}
          type="url"
          className={styles.input}
          placeholder="image"
          onChange={handleChangeImage}
        />
        <MyButton type="submit">Submit</MyButton>
      </form>
    </div>
  );
};

export default AddProduct;
