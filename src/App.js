import React, { useEffect } from "react";
import AppRouter from "./Components/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
  selectStatus,
} from "./features/Products/productsSlice";
import Loader from "./UI/Loader";
import NavBar from "./UI/NavBar";
import styles from './styles/App.module.css'

function App() {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      {status === "loading" ? <Loader /> : <AppRouter />}
    </div>
  );
}

export default App;
