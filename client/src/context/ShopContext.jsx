
import React, { createContext, useReducer, useContext } from 'react';

// Initial state for the shopping cart
const initialState = {
  cart: [],
};

// Define the reducer function to handle actions
const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    // Add more cases for other actions as needed
    default:
      return state;
  }
};

// Create the context
const ShopContext = createContext();

// Create a custom hook to access the context
const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};

// Create the provider component
const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState); // similar to contextvalue for state and dispatch

  // Add any additional utility functions or state as needed

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider, useShopContext };
