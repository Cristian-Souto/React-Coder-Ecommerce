import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore ,collection, doc} from "firebase/firestore";
//mock
import { item as itemMock } from '../mocks/item.mock'

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const { id } = useParams();
  console.log({id})
  
  useEffect(() => {
    const db = getFirestore();
    /* const productsCollection = collection(db,"items") */
   /*  getDocs(productsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setItem(products);
    })  */
    const itemRef = doc(db, "items", "MiokEevqXzLowkK2Bxzr");
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem([{ id: "MiokEevqXzLowkK2Bxzr", ...snapshot.data() }]);
      }
    });
  },[])
/*   useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => resolve(itemMock.find((item) => item.id === id)), 1000)
    ).then((data) => setItem(data));
  }, [id]); */

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;