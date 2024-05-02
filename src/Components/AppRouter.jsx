import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductById from "../pages/ProductById";
import ProductsByCategory from "../pages/ProductsByCategory";
import Basket from "../pages/Basket";
import AddProduct from "../pages/AddProduct";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductById />} />
        <Route path="/category/:category" element={<ProductsByCategory />} />
      </Routes>
    </>
  );
};

export default AppRouter;
