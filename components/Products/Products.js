import { useContext } from "react";
import Card from "@/components/Products/Card";
import { Cart } from "@/context/Context";
const Products = () => {
  const items = useContext(Cart);
  console.log(items);
  return (
    <>
      <div className="flex items-center justify-center flex-wrap ">
        {items ? (
          items.map((item) => (
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
