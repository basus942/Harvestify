import { useContext } from "react";
import Card from "@/components/Products/Card";
import { cartContext } from "@/context/Context";

const Products = () => {
  const { state } = cartContext();

  const { productList } = state;
  return (
    <>
      <div className="flex items-center justify-center flex-wrap ">
        {productList ? (
          productList.map((item) => (
            <div className="p-2" key={item.key}>
              <Card title={item.title} image={item.image} price={item.price} />
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
