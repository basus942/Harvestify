import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "@/components/Products/Card";
const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/products.json"
      )
      .then((res) => {
        const data = res.data;

        // Convert the object of objects into an array of objects
        const productList = Object.keys(data).map((productId) => ({
          id: productId,
          ...data[productId],
        }));

        setItems(productList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-wrap ">
        {items.map((item) => (
          <div className="p-2">
            <Card title={item.title} image={item.image} price={item.price} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
