import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import '../hoja-de-estilo/itemDetailContainer.css'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
   
  const getData = async (id) => {
    const db = getFirestore();
    const q = await getDoc(doc(db,"items",id));
    setItem({ id: q.id, ...q.data() })
  }

  useEffect(() => {
    getData(id);
  },[id])
  
  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;

}
export default ItemDetailContainer;