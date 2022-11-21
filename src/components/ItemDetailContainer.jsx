import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

//imagen gpu
import graphicsCard from '../assets/rtx3060.jpg'

const itemMock = [
  {
    id: "1",
    name: "RTX 3060",
    description: "Placa de video geforce RTX 3060 EVGA",
    price: 80000,
    image: graphicsCard
  }
]

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;