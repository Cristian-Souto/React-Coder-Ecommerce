import { Layout } from "../components/Layout";
import Item from "../components/Item";
import { TrashWidget } from "../components/TrashWidget";
import CheckoutView from "./checkout";
import { useContext} from "react";
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
      { <div className="flex flex-col max-w-[50%]"  /* style={{maxWidth:'90%',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center',margin:'auto'}} */>
       { items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl" >No has agregado productos al carrito</h1>
            <button
              onClick={() => navigate("/")}
              className="rounded-lg p-2 bg-gray-800 text-white mt-4"
           >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div className="flex p-2 gap-4" /* style={{ width:'80%',padding:'2rem'}} */>
            <div /* style={{display:'flex',flexDirection:'column'}} */>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded
                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded} 
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4" /* style={{display:'flex',justifyContent:'flex-end',marginTop:'3rem'}} */>
              <div className="flex flex-col" /* style={{display:'flex',flexDirection:'row'}} */>
                <span>
                  Total a pagar: <strong>${importeTotal}</strong>
                </span>
                <button
                  onClick={goToCheckout}
/*                   style={{borderRadius:'10px',color:'white',fontWeight:'bolder',backgroundColor:'darkslateblue',padding:'1rem .8rem',marginTop:'2rem',marginRight:'10px'}}
 */             className="rounded-lg p-2 mb-2 bg-gray-800 text-white"  
                >
                  Ir al Checkout
                </button>
                <button
                  onClick={clear}
/*                   style={{borderRadius:'10px',color:'white',fontWeight:'bolder',backgroundColor:'#DC0000',padding:'1rem .8rem',marginTop:'2rem'}}
 */             className="rounded-lg p-2 bg-gray-800 text-white" 
                >
                Vaciar carrito
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