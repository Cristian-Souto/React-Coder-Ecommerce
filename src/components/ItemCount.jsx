export const ItemCount = ({ count, handleCount }) => {
  return (
    <div>
      <button
        onClick={() => handleCount("minus")}
      >
        -
      </button>
      <span
        id="counter"
      >
        {count}
      </span>
      <button
        onClick={() => handleCount("plus")}
      >
        + 
      </button>
    </div>
  )
}