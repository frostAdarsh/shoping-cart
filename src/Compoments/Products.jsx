import { products } from "../data/product";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id}
        {...product} />
      ))}
    </div>
  );
};

export default Products;
