import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Cart = createContext();

const Context = ({ children }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/products.json"
      )
      .then((res) => {
        const data = res.data;
        // Convert the object of objects into an array of objects
        const products = Object.keys(data).map((productId) => ({
          key: Math.random(),
          id: productId,
          ...data[productId],
        }));

        setProductList(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <Cart.Provider value={productList}>{children}</Cart.Provider>;
};

export default Context;
