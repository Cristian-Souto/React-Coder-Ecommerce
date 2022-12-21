import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  /*Estado para el componente itemCount*/
  const [count, setCount] = useState(1);

  console.log("useState inicial del count es: ", count)
  /*useState se actualiza cuando agrego o quito productos del componente itemCount. 
  modifico la cantidad de stock cuando presiono el boton de agregar al carrito 
  que llama a la funcion handleCount().*/

  const [currentStock, setCurrentStock] = useState(item.stock);
  //currentStock es la cantidad actual de stock del producto 
  console.log("Cantidad actual: ", currentStock)
  const maxQuantity = currentStock;
  //cantidad maxima de stock
  console.log("cantidad maxima: ", maxQuantity)

  /*funcion que actualiza el valor del itemCount, && si count es menor a valor maxQuantity entonces..
  aumente el count. 
  */
  function handleCount(type) {
    if (type === "incrementar" && count < maxQuantity) setCount(count + 1);
    if (type === "disminuir" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/checkout");
  }

  return (
    <div className="itemDetailContainer">
      <div className="imageItem">
        <img style={{ width: '50%', objectFit: 'contain' }} src={item.img} alt={item.name} />
      </div>
      <div className="detailItems">
        <h2 className="item">{item.name}</h2>
        <p className="item itemDescription">{item.description}</p>
        <span className="itemStock">Stock:{item.stock}</span>

      </div>
      <div style={{ width: '100%' }}>
        {currentStock > 0 ? (
          <ItemCount count={count} handleCount={handleCount} />
        ) : (
          <p style={{ color: 'red', fontWeight: '600', textAlign: 'center' }}>Sin stock</p>
        )}
      </div>
      <div className="btnContainer">
        <button className="btnAddItem"
          onClick={handleAdd}
          disabled={currentStock === 0}
        >Agregar al carrito
        </button>
        <button className="btnCheckOut"
          disabled={!isInCart(item.id)}
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