import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.removeItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCartTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const getCartTotalPrice = (state) =>
  state.cart.cart.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0,
  );

export const getPizzaPresence = (id) => (state) => {
  const { cart } = state.cart;
  return cart.find((item) => item.pizzaId === id);
};
