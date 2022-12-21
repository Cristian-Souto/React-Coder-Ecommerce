import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log({ category });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    //CONSULTAR TODOS LOS PRODUCTOS SIN FILTROS
    const productsCollection = collection(db, "items");
    getDocs(productsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(products);
    })

    //PARA TODOS LOS PRODUCTOS CON FILTROS
    if (category) {
      const queryFilter = query(productsCollection, where('category', '==', category))
      getDocs(queryFilter)
        .then(res => setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
    }
    else {
      getDocs(productsCollection)
        .then(res => setProducts(res.docs.map(doc=> ({ id: doc.id, ...doc.data() }))))
    }

  }, [category]);

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
