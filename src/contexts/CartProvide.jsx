import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "Add": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "Minus": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    case "Remove": {
      return cart.filter((item) => item.id !== action.payload.id);
    }
  }
}

const CartProvide = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };
  const increaseQty = (id) => {
    dispatch({ type: "Add", payload: { id: id } });
  };
  const decreaseQty = (id) => {
    dispatch({ type: "Minus", payload: { id: id } });
  };
  const removeItem = (id) => {
    dispatch({ type: "Remove", payload: { id: id } });
  };
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}

export default CartProvide;
