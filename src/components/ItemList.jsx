import Item from "./Item";
import '../hoja-de-estilo/itemsListProducts.css'

const ItemList = ({products}) => {
  return (
    <ul className="itemsListProducts">
      {products.map(product => (
        <Item product={product} />
      ))}
    </ul>
  );
};


export default ItemList;