import { useContext, useState } from "react";
import Card from "@/components/Products/Card";
import { cartContext } from "@/context/Context";
import Filter from "../filter";

const Products = () => {
  const [filter, setFilter] = useState("Fruit");
  const { state } = cartContext();
  const upLift = (e) => {
    setFilter(e);
  };

  const { productList } = state;
  return (
    <>
      <div className="flex items-center justify-center">
        <Filter child={upLift} />
      </div>
      <div className="flex items-center justify-center flex-wrap ">
        {productList ? (
          productList
            .filter((item) => item.type === filter)
            .map((item) => (
              <div className="p-2" key={item.key}>
                <Card
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
