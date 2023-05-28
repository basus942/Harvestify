import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
          {/* Card */}
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
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
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
          {/* End Card */}

          {/* Knowledgebase */}
          <div className="flex flex-col items-center bg-[#038242]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-200 dark:text-gray-200">
              Harvestify
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              Visit our About us for FAQs.
            </p>
            <a
              href="/About"
              className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zM7 9a1 1 0 00-1 1v1a1 1 0 002 0V9a1 1 0 00-1-1zm2.707-3.707a1 1 0 00-1.414 0L6 8.586A1 1 0 007 10h6a1 1 0 00.707-1.707L11.414 5.293a1 1 0 00-1.707-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* End Knowledgebase */}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
