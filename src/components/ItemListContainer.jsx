import { useState } from "react";
import ItemList from "./ItemList";
//images
import teclado from '../assets/teclado.jpg';
import mouse from '../assets/mouse.jpg';

const productos = [
  { 
    id: "1", 
    name: "Keyboard", 
    description: "description", 
    stock: 3,
    img:teclado
  },
  { 
    id: "2", 
    name: "Mouse", 
    description: "description", 
    stock: 2,
    img:mouse
  }
];

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(productos)
    }, 3000)
  )
  
  productList.then(data => setProducts(data))

  return (
    <div>
     <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;
