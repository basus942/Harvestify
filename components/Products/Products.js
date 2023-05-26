import { useContext, useState } from "react";
import Card from "@/components/Products/Card";
import { cartContext } from "@/context/Context";
import Filter from "../filter";

const Products = () => {
  const [filter, setFilter] = useState("Fruit");

  const { state, dispatch } = cartContext();
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
      <div className="flex items-center justify-center flex-wrap ">
        {productList ? (
          productList
            .filter((item) => (filter === "All" ? true : item.type === filter))
            .map((item) => (
              <div className="p-2" key={item.key}>
                <Card
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  addButton={
                    (onclick = () => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    })
                  }
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
