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
  const { productsAdded: items, clear, importeTotal } = useContext(CartContext);
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
      .finally(() => { });
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
      <form onSubmit={handleFinalizePurchase} className="flex flex-col justify-around w-10/12 p-3 min-h-screen max-w-lg shadow bg-gray-600 rounded-md ">
        <h2 className="text-4xl mb-6 text-center">Datos de compras</h2>
        <div className="flex flex-col">
          <input
            className="h-10 pl-4 mb-6 rounded-md"
            placeholder="Nombre Completo"
            required
          />
          <input
            className="h-10 pl-4 mb-6 rounded-md"
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          <input
            className="h-10 pl-4 mb-6 rounded-md"
            placeholder="Email"
            type={"email"}
            required
          />
        </div>
        <span className="mb-4">
          Total a pagar: <strong>${importeTotal}</strong>
        </span>
        <button
          type="submit"
          className="rounded-lg p-2 bg-gray-800 text-white disabled:opacity-50 w-36"
          disabled={isLoading}
        >
          Finalizar
        </button>
      </form>
    </Layout>
  );
}

export default CheckoutView;