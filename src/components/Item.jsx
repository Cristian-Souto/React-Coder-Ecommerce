import { Link } from "react-router-dom";
import '../hoja-de-estilo/container-items.css'
import '../hoja-de-estilo/list-item.css'

const Item = ({ product }) => {
  return (
    <div className="container-items">
      
        <img src={product.img} alt="keyboard" style={{ width: '150px' }} />
        <li>{product.name}</li>
        <li>{product.description}</li>
        {/*<Link to={`/item/${product.id}`}>
        <button>Detalle</button>
      </Link> */}
        <p style={{fontSize:'12px',marginBottom:'5px'}}>Stock: {product.stock}</p>
        <span style={{ fontWeight: '700'}}>${product.price}</span>
     
    </div>
  )
}

export default Item;
