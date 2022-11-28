import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <img src={product.img} alt="keyboard" style={{ width: '150px' }} />
      <li>{product.name}</li>
      <li>{product.description}</li>
      <Link to={`/item/${product.id}`}>
        <button>Agregar al carrito</button>
      </Link>
    </div>
  )
}

export default Item;
