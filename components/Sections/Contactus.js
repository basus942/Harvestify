import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Contactus = () => {
  const data = { Fname: "", Lname: "", email: "", phone: "", msg: "" };
  const [enteredData, setEnteredData] = useState(data);
  const handleData = (e) => {
    setEnteredData({ ...enteredData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const a = enteredData;

    if (!a.Fname || !a.Lname || !a.email || !a.phone || !a.msg) {
      alert("Enter all the Details");
    } else {
      console.log(enteredData);
    }
  };
  return (
    <div
      id="ContactUs"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl dark:text-white">
            Contact us
          </h1>
          <p className="mt-1 text-gray-400 dark:text-gray-400">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Card */}{" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: -200,
              },
              visible: {
                x: 0,
                transition: {
                  type: "spring",
                  delay: 0.2,
                },
              },
            }}
          >
            <div className="flex flex-col border rounded-xl bg-green-400 p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-2xl font-bold text-gray-700 dark:text-gray-200">
                Fill in the form
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="sr-only"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="Fname"
                        value={enteredData.Fname}
                        onChange={handleData}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="sr-only"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="Lname"
                        value={enteredData.Lname}
                        onChange={handleData}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  {/* End Grid */}

                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={enteredData.email}
                      onChange={handleData}
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={enteredData.phone}
                      onChange={handleData}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-details-contacts-1" className="sr-only">
                      Message
                    </label>
                    <textarea
                      name="msg"
                      value={enteredData.msg}
                      onChange={handleData}
                      rows="3"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-green-800 text-gray-300 ripple={true}"
                  >
                    Send inquiry
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-lg text-gray-900">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </motion.div>
          {/* End Card */}
          {/* Knowledgebase */}{" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: 200,
              },
              visible: {
                x: 0,
                transition: {
                  type: "spring",
                  delay: 0.2,
                },
              },
            }}
          >
            <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
          </motion.div>
          {/* End Knowledgebase */}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
