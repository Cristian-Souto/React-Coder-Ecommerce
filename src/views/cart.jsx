import { Layout } from "../components/Layout";
import Item from "../components/Item";
import CheckoutView from "./checkout";
import { useContext} from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const CartView = () => {
  const { productsAdded: items, importeTotal } = useContext(CartContext);
  const navigate = useNavigate();

  function goToCheckout() {
    return navigate('/checkout')
  }

  return (
    <Layout>
      { <div style={{minWidth:'60%',display:'flex', flexDirection:"row",justifyContent:'center',height:'90vh'}}>
       { items.length === 0 ? (
          <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
            <h1 className="text-2xl">No has agregado productos al carrito</h1>
            <button
              onClick={() => navigate("/")}
              style={{borderRadius:'8px',color:'white',fontWeight:'bolder',backgroundColor:'slategrey',padding:'1rem .8rem',marginTop:'2rem'}}
              className="rounded-lg p-2 bg-gray-800 text-white mt-4"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <div className="flex gap-4">
              {items && items.map((product) => {
                const quantityAdded = product.quantityAdded
                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              <div className="flex flex-col">
                <span>
                  Total a pagar: <strong>${importeTotal}</strong>
                </span>
                <button
                  onClick={goToCheckout}
                  className="rounded-lg p-2 bg-gray-800 text-white"
                >
                  Ir al Checkout
                </button>
              </div>
            </div>
          </div>
       )}
      </div>}
    </Layout>
  )
}

export default CartView;