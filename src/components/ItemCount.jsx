import '../hoja-de-estilo/itemCountContainer.css'

export const ItemCount = ({ count, handleCount }) => {
  return (
    <div className="itemCountContainer">
      <button
        onClick={() => handleCount("disminuir")}
      >
        -
      </button>
      <span
        id="counter"
      >
        {count}
      </span>
      <button 
        onClick={() => handleCount("incrementar")}
      >
        +
      </button>
    </div>
  )
}