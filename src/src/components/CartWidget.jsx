import React from "react";
import carro from "../assets/carrito.png"
import "../hoja-de-estilo/cartWidget.css";

const CartWidget = () => {
  return (
    <button>
      <img src={carro} alt="" />
    </button>
  )
}

export default CartWidget;