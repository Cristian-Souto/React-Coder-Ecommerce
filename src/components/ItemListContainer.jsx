import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//mock
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { useParams } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log({ category });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    //PARA CONSULTAR UN SOLO PRODUCTO DOC DE NUESTRA COLECCION -> LOCALHOST:3000/ITEM/IDPROD 
    /*const itemRef = doc(db, "items", "MiokEevqXzLowkK2Bxzr");
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log({ id: "MiokEevqXzLowkK2Bxzr", ...snapshot.data() });
        setProducts([{ id: "MiokEevqXzLowkK2Bxzr", ...snapshot.data() }]);
      }
    }); */

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
   /*  const q = query(productsCollection,where("category" , "==" , "keyboard"));
     getDocs(q).then((snapshot) => {
       const products = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setProducts(products);
     }); */
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
