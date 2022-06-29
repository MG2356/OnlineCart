import { useContext } from "react";
import "./ProductCard.css";
//import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../Context/Cart/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
       
        <div className='ProductCard__Rateing'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add  Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;