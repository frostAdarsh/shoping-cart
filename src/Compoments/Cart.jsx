import { useCart } from "../contexts/CartProvide";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();
  let toatalAmount = 0;
  for (let item of cart) {
    toatalAmount += item.price * item.quantity;
  }
  if (cart.length === 0) return <h1>No items found</h1>;
  return (
    <>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>Toatal Amount:{toatalAmount}</h1>
    </>
  );
};

export default Cart;
