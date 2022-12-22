import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [importeTotal, setImporteTotal] = useState(0);

  //calcular el total de productos agregados al carrito
  useEffect(() => {
    const importe = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((acumuladorSuma, valorActual) => acumuladorSuma + valorActual, 0);
    setImporteTotal(importe);
  }, [productsAdded]);

  function addItem(item, quantity) {
    const isAlreadyAdded = isInCart(item.id);
    if (isAlreadyAdded) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
              ...productAdded,
              quantityAdded: productAdded.quantityAdded + quantity,
            }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
  }

  function clear() {
    setProductsAdded([]);
    setImporteTotal(0);
  }

  function isInCart(itemId) {
    return Boolean(productsAdded.find((product) => product.item.id === itemId));
  }

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, productsAdded, importeTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
