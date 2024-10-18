import { createSlice } from "@reduxjs/toolkit";

const findIndexOfItem = (state, action) => {
  return state.findIndex((item) => item.id === action.payload.id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const productIndex = findIndexOfItem(state, action);
      if (productIndex !== -1) {
        state[productIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeToCart(state, action) {
      const productIndex = findIndexOfItem(state, action);
      state.splice(productIndex, 1);
    },
    increaseQuantity(state, action) {
      console.log(action);
      const productIndex = findIndexOfItem(state, action);
      state[productIndex].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const productIndex = findIndexOfItem(state, action);
      state[productIndex].quantity -= 1;
      if (state[productIndex].quantity <= 0) {
        state.splice(productIndex, 1);
      }
    },
    removeAllCartItems(state, action) {
      return [];
    },
  },
});

export const {
  addToCart,
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
  removeAllCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
