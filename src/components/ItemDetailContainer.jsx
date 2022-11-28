import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//mock
import { item as itemMock } from '../mocks/item.mock'


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => resolve(itemMock.find((item) => item.id === id)), 1000)
    ).then((data) =>setItem(data));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;