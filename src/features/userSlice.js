import { createSlice } from "@reduxjs/toolkit";
import {addToCart, addUser, clearAll, clearCart, getCart, getUser, getReview, addReview  } from "./localStroage";

import { toast } from "react-toastify";




const initialState = {
  user: getUser(),
  carts: getCart(),
  reviews: getReview() || [], // Initialize as an empty array if null or undefined
  quantity: 0,

};


export const userSlice = createSlice({
  initialState,
  name: 'userInfo',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUser(state.user);
    },

    setCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.carts.find((cartItem) => cartItem.id === item.id);
    
      if (!existingItem) {
        state.carts.push(item);
        addToCart(state.carts);
      } else {
        toast("Item Already Add");
      }

    },

    updateCart: (state, action) => {
      state.carts = state.carts.map((cart) => {
        return cart.product === action.payload.product ? action.payload : cart;
      });
      addToCart(state.carts);
    },

    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      addToCart(state.carts);
    },

    updateUser: (state, action) => {
      state.user = action.payload;
      addUser(state.user);
    },

    clearCarts: (state, action) => {
      clearCart();
      state.carts = [];

    },
    clearData: (state, action) => {
      state.user = null;
      state.carts = [];
      clearAll();
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find((item) => item.id === itemId);

      if (item) {
        item.qty++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find((item) => item.id === itemId);

      if (item && item.qty > 1) {
        item.qty--;
      }
    },

    setReview: (state, action) =>{
      const item = action.payload;
      const existingItem = state.reviews.find((cartItem) => cartItem.id === item.id);
    
      if (!existingItem) {
        state.reviews.push(item);
        addReview(state.reviews);
      } else {
        toast("Review Already Add");
      }
    }
  }
});
export const { clearData, setUser, updateCart, clearCarts, updateUser, setCart, removeFromCart, setQuantity, incrementQuantity, decrementQuantity, setReview} = userSlice.actions;

export default userSlice.reducer;