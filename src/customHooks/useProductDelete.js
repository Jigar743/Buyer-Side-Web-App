import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../actions/auth";

export default function useProductDelete() {
  const addToCartProduct = useSelector((state) => state.reducer.addToCart);
  const dispatch = useDispatch();

  const handleDeleteProduct = (index) => {
    let data = [...addToCartProduct];
    data.splice(index, 1);
    dispatch({
      type: ADD_TO_CART,
      addToCartProduct: data,
    });
  };

  return [handleDeleteProduct];
}
