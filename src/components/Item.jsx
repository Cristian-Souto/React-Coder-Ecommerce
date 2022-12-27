import { useNavigate } from "react-router-dom";
import '../hoja-de-estilo/container-items.css'
import { useGetItemImg } from "../hook/useGetItemImg";

const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const image = useGetItemImg(product.img)

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div className="container-items">
      <div style={{width:'100%'}}>
        <img src={image} alt="" style={{ width:'50%'}} />
      </div>
      {/* {<Link to={`/item/${product.id}`}> */}
      <div style={{padding:'1rem'}}>
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
