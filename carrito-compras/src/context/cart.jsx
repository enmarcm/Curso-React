import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayLoad;
      const cartProductIndex = state.findIndex((item) => item?.id === id);

      if (cartProductIndex >= 0) {
        const newState = structuredClone(state);
        newState[cartProductIndex].quantity += 1;
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayLoad, //* esto hace referencia al product
          quantity: 1,
        },
      ];

      return newState;
    }

    case "CLEAR_CART": {
      return initialState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayLoad;
      const newState = state.filter((item) => item.id !== id);
      return newState;
    }
  }

  return state;
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const removeFromCart = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
