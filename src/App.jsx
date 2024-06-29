import "./App.css";
import Header from "./Compoments/Header";
import Products from "./Compoments/Products";
import CartProvide from "./contexts/CartProvide";

function App() {
  return (
    <>
      <CartProvide>
        <Header/>
        <Products />
      </CartProvide>
    </>
  );
}

export default App;
