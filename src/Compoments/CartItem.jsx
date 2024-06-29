import { useCart } from "../contexts/CartProvide";
const CartItem = ({ id, price, img, title, quantity }) => {
  const { increaseQty, decreaseQty,removeItem } = useCart();
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id:{id}</p>
      <p>
        price:{price * quantity}
      </p>
      <p>title:{title}</p>
      <p>quantity:{quantity}</p>
      <button
        onClick={() => {
          increaseQty(id);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          decreaseQty(id);
        }}
      >
        Minus
      </button>
      <button onClick={()=>{
        removeItem(id)
      }}>Remove</button>
    </div>
  );
};

export default CartItem;
