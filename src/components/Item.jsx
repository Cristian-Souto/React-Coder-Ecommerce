import { useNavigate } from "react-router-dom";
import '../hoja-de-estilo/container-items.css'

const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div className="container-items">
      <div>
        <img src={product.img} alt="" style={{ width:'55%' }} />
      </div>
      {/* {<Link to={`/item/${product.id}`}> */}
      <div>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <button onClick={handleNavigate} className="btnDetail">Detalle</button>
        {/*  </Link>} */}
        <p className="stockParagrahp">Stock: {product.stock}</p>
        <p className="productPrice"> ${product.price}</p>
      </div>
    </div>
  )
}

export default Item;
