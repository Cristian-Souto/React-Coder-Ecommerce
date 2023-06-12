import { Layout } from "../components/Layout";
import Item from "../components/Item";
import { TrashWidget } from "../components/TrashWidget";
import CheckoutView from "./checkout";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const CartView = () => {
  const { productsAdded: items, importeTotal, clear } = useContext(CartContext);
  const navigate = useNavigate();

  function goToCheckout() {
    return navigate('/checkout')
  }

  return (
    <Layout>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl" >No has agregado productos al carrito</h1>
            <button
              onClick={() => navigate("/")}
              className="rounded-lg py-2 px-4 bg-gray-800 text-white mt-4"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col">
              {items.map((product) => {
                const quantityAdded = product.quantityAdded
                return (
                  <div className="relative mb-4">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
              <span className="text-lg mb-2">
                Total a pagar: <strong>${importeTotal}</strong>
              </span>
              <button
                onClick={goToCheckout}
                className="rounded-lg py-2 px-4 mb-2 bg-gray-800 text-white"
              >
                Comprar
              </button>
              <button
                onClick={clear}
                className="rounded-lg py-2 px-4 bg-gray-800 text-white"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}


export default CartView;