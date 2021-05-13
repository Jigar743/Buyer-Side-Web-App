import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../actions/auth";

export default function useProductQuantity() {
  const addToCartProduct = useSelector((state) => state.reducer.addToCart);
  const dispatch = useDispatch();

  const handlePlus = (index) => {
    let data = [...addToCartProduct];
    let data_index = { ...data[index] };
    data_index.quantity += 1;
    data[index] = data_index;
    dispatch({
      type: ADD_TO_CART,
      addToCartProduct: data,
    });
  };

  const handleMinus = (index) => {
    let data = [...addToCartProduct];
    let data_index = { ...data[index] };
    data_index.quantity -= 1;
    data[index] = data_index;
    dispatch({
      type: ADD_TO_CART,
      addToCartProduct: data,
    });
  };

  return [handlePlus, handleMinus];
}
