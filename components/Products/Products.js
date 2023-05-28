import { useState } from "react";

import { cartContext } from "@/context/Context";
import Filter from "../filter";
import CardComp from "@/components/Products/Card";

const Products = () => {
  const [filter, setFilter] = useState("Fruit");

  const { state } = cartContext();
  const upLift = (e) => {
    setFilter(e);
  };
  console.log(state.cart);

  const { productList } = state;

  return (
    <>
      <div className="flex items-center justify-center">
        <Filter child={upLift} />
      </div>
      <div className="flex items-center justify-center  flex-wrap mb-24">
        {productList ? (
          productList
            .filter((item) => (filter === "All" ? true : item.type === filter))
            .map((item) => (
              <div className="p-2" id={item.id}>
                <CardComp
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Products;
