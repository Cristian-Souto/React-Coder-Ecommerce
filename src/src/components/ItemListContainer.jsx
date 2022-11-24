import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//mock
import { item } from '../mocks/item.mock'
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 3000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (producto) => producto.category === category
        );
        setProducts(categories)
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <ItemList products={products} />
    </div>
  )
};

export default ItemListContainer;
