import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);

  return (
    <Layout>
      <form onSubmit={handleFinalizePurchase} style={{backgroundColor:'#DBD8E3',borderRadius:'8px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',margin:'auto',maxWidth:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'80vh'}} >
        <div style={{display:'flex',flexDirection:'column'}}>
          <input
            style={{height:'40px',width:'100%',borderRadius:'8px',border:'none',margin:'1rem 0',padding:'0 .5rem'}}
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Nombre Completo"
            required
          />
          <input
            style={{height:'40px',borderRadius:'8px',border:'none',margin:'1rem 0',padding:'0 .5rem'}}
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          <input
           style={{height:'40px',borderRadius:'8px',border:'none',margin:'1rem 0',padding:'0 .5rem'}}
            className="h-8 pl-4 mb-4 rounded-md"
            placeholder="Email"
            type={"email"}
            required
          />
        </div>
        <span style={{fontSize:'1.3rem',margin:'2rem'}}>
          Total a pagar: <strong>${totalAmount}</strong>
        </span>
        <button
         style={{width:'40%',color:'white',fontWeight:'600',borderRadius:'6px',cursor:'pointer',border:'none',padding:'1rem 2rem',backgroundColor:'seagreen'}}
          type="submit"
          className="rounded-lg p-2 bg-gray-800 text-white disabled:opacity-50"
          disabled={isLoading}
        >
          Finalizar
        </button>
      </form>
    </Layout>
  );
};

export default CheckoutView;