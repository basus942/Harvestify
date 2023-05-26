import { useState, useEffect } from "react";
import axios from "axios";

import { ProtectedRoute } from "@/context/ProtectedRoute";

const Addproduct = () => {
  const productdata = { title: "", image: "", price: "", type: "" };
  const [enteredData, setEnteredData] = useState(productdata);
  const [submit, setSubmit] = useState(false);
  const handleData = (e) => {
    setEnteredData({ ...enteredData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const a = enteredData;
    if (!a.image || !a.price || !a.title) {
      alert("Enter all the Details");
    } else {
      const configRDFirebase = {
        url: "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/products.json",
        method: "post",
        data: a,
      };
      axios(configRDFirebase)
        .then((res) => {
          console.log(res);
          setSubmit(true);
        })

        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    if (submit) {
      const timeout = setTimeout(() => {
        setSubmit(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [submit]);
  return (
    <>
      <ProtectedRoute>
        {submit && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>
        )}

        <div className="flex items-center text-white flex-col w-80 h-80 bg-[#038242] mx-5  rounded-xl mb-24 ">
          <form onSubmit={handleSubmit}>
            <div className="flex-col">
              <h1 className="font-bold text-xl m-2 ">Add Product</h1>
              <br />
              <label className="font-medium ">
                Title :
                <br />
                <input
                  type="text"
                  name="title"
                  value={enteredData.title}
                  placeholder="title"
                  onChange={handleData}
                ></input>
                <br />
              </label>
              <label className="font-medium ">ImageUrl :</label>
              <br />
              <input
                type="url"
                name="image"
                value={enteredData.image}
                placeholder="imageUrl"
                onChange={handleData}
              ></input>
              <br />
              <label className="font-medium ">
                Price :
                <br />
                <input
                  type="number"
                  name="price"
                  value={enteredData.price}
                  placeholder="Price in $"
                  onChange={handleData}
                ></input>
                <br />
              </label>
              <label className="font-medium ">
                Type :
                <br />
                <select
                  value={enteredData.type}
                  name="type"
                  onChange={handleData}
                >
                  <option value="A">Fruit</option>
                  <option value="B"> Vegtable </option>
                </select>
              </label>
              <br />
              <button type="submit" className="button5">
                ADD
              </button>
            </div>
          </form>
        </div>
      </ProtectedRoute>
    </>
  );
};
export default Addproduct;
