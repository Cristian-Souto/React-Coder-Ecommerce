export const ItemCount = ({ count, handleCount }) => {
  return (
    <div>
      <button
        onClick={() => handleCount("minus")}
      >
        Eliminar producto
      </button>
      <span
        id="counter"
      >
        {count}
      </span>
      <button
        onClick={() => handleCount("plus")}
      >
        Agregar Producto
      </button>
    </div>
  )
}