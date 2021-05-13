import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../actions/auth";
import groceryProduct from "../ProductsData/ProductData.json";

const useAddToCart = () => {
  const [addToCartArr, setAddToCartArr] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (index) => {
    let addtocartData = [];
    let Data = groceryProduct[index];
    delete Data.pack_size;
    addtocartData.push(...addToCartArr, Data);
    setAddToCartArr(addtocartData);
    dispatch({
      type: ADD_TO_CART,
      addToCartProduct: addtocartData,
    });
  };
  return [handleAddToCart];
};

export default useAddToCart;
