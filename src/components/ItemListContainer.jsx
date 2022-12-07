import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//mock
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log({ category });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", "MiokEevqXzLowkK2Bxzr");
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        /* console.log({ id:"MiokEevqXzLowkK2Bxzr", ...snapshot.data() }); */
        setProducts([{id:"MiokEevqXzLowkK2Bxzr", ...snapshot.data()}])
      }
    });
  }, []);

  /* useEffect(() => {
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
  }, [category]); */

  if (products.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
