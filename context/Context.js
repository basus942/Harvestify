import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import CartReducer from "./CartReducer";
const Cart = createContext();

const Context = ({ children, products }) => {
  console.log(products);
  const [state, dispatch] = useReducer(CartReducer, {
    productList: [], // Initialize productList as an empty array
    cart: [],
  });
  // useEffect(() => {
  //   dispatch({ type: "SET_PRODUCT_LIST", payload: products });
  // }, []);

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

        dispatch({ type: "SET_PRODUCT_LIST", payload: products });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartContext = () => {
  return useContext(Cart);
};

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/products.json"
//   );
//   const data = await res.json();
//   console.log(data);
//   const products = Object.keys(data).map((productId) => ({
//     key: Math.random(),
//     id: productId,
//     ...data[productId],
//   }));

//   return {
//     props: { products: products },
//   };
// }
