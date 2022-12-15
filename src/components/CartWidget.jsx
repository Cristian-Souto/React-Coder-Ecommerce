import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carro from "../assets/cart-shop.png";
import { CartContext } from "../context/cartContext";
import "../hoja-de-estilo/cartWidget.css";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;
  return (
    <Link to="/cart">
      <button>
        <img src={carro} alt="" />
      </button>
    {count > 0 &&(
      <span>
        {count}
      </span>
    )}
    </Link>
  );
};

export default CartWidget;
