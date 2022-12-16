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
      <div className="imageItem">
        <img style={{ width: '50%', objectFit: 'cover' }} src={item.img} alt={item.name} />
      </div>
      <div className="detailItems">
        <h2 className="item">{item.name}</h2>
        <p className="item itemDescription">{item.description}</p>
        <span className="itemStock">Stock:{item.stock}</span>
      </div>
      <div>
        {currentStock > 0 ? (
          <ItemCount count={count} handleCount={handleCount} />
        ) : (
          <span style={{ color: 'red', fontWeight: '600' }}>Sin stock</span>
        )}
      </div>
      <div className="btnContainer">
        <button className="btnAddItem"
          onClick={handleAdd}
        >Agregar al carrito
        </button>
        <button className="btnCheckOut"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </button>
      </div>
      <span className="itemPrice">$ {item.price}</span>
    </div>
  )
}

export default ItemDetail;