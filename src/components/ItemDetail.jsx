import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  console.log({ navigate });

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.description}</p>
      <div>
        {currentStock > 0 ? (
          <ItemCount count={count} handleCount={handleCount} />
        ) : (
          <span>Sin stock</span>
        )}
      </div>
      <button
        onClick={handleAdd}
      >Agregar al carrito
      </button>
      <button
        onClick={handleCheckout}
      >
        Finalizar Compra
      </button>
      <span>$ {item.price}</span>
    </div>
  )
}

export default ItemDetail;