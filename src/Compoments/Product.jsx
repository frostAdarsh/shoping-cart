import { useCart } from "../contexts/CartProvide";

const Product = ({ id, title, price, img }) => {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    for (let item of cart) {
      if (item.id === id) {
        alert("This already add to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    alert("Item added");
  }
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <img src={img} alt={title} height={200} />
      <p>id: {id}</p>
      <p> title: {title}</p>
      <p>price: {price}</p>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  );
};

export default Product;
