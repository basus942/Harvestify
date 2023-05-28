import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "@material-tailwind/react";

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
    if (!a.image || !a.price || !a.title || !a.type) {
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
              <span>Your purchase has been Added!</span>
            </div>
          </div>
        )}
        <div className="my-20 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 ">
            <h2 className="mb-8 p-3 text-xl font-semibold text-gray-100 dark:text-gray-200">
              Add Product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-">
                  <div>
                    <label className="font-medium text-white ">
                      Title:
                      <input
                        type="text"
                        name="title"
                        value={enteredData.title}
                        placeholder="Title"
                        onChange={handleData}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="font-medium text-white ">
                      Image Url
                      <input
                        type="url"
                        name="image"
                        value={enteredData.image}
                        placeholder="ImageUrl"
                        onChange={handleData}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </label>
                  </div>
                </div>
                {/* End Grid */}

                <div>
                  <label className="font-medium text-white ">
                    Price
                    <input
                      type="number"
                      name="price"
                      value={enteredData.price}
                      placeholder="Price in $"
                      onChange={handleData}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </label>
                </div>

                <label className="font-medium text-white ">
                  Type:
                  <br />
                  <select
                    value={enteredData.type}
                    name="type"
                    className="input-md w-50"
                    onChange={handleData}
                  >
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                  </select>
                </label>
              </div>

              <div className="mt-6">
                <Button
                  ripple={false}
                  fullWidth={true}
                  type="submit"
                  className="my-5 bg-green-800 text-gray-300 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                  ADD
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </ProtectedRoute>
    </>
  );
};
export default Addproduct;
