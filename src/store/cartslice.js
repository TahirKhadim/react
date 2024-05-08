import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    remove(state, action) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },

    //decrement
    decrement(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0 && state.carts[itemIndex].quantity > 1) {
        state.carts[itemIndex].quantity -= 1;
      } else if (itemIndex >= 0 && state.carts[itemIndex].quantity === 1) {
        state.carts = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { add, remove, decrement } = cartSlice.actions;
export default cartSlice.reducer;
