import { initialState, reducerCart } from "../context/cart";

export function useCartReducer() {
  const [state, dispatch] = useReducer(reducerCart, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const removeFromCart = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  return { addToCart, clearCart, removeFromCart, state };
}
