import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
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
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="itemDetailContainer">
      <img style={{ width: '20%', objectFit: 'contain' }} src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <span style={{ fontSize: '12px', marginBottom: '5px' }}>Stock: {item.stock}</span>
      <div>
        {currentStock > 0 ? (
          <ItemCount count={count} handleCount={handleCount} />
        ) : (
          <span style={{ color: 'red', fontWeight: '600' }}>Sin stock</span>
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
      <span style={{fontWeight:'600'}}>$ {item.price}</span>
    </div>
  )
}

export default ItemDetail;