import React, { useState } from "react";

const Filter = ({ child }) => {
  const [activeFilter, setActiveFilter] = useState("Fruit");

  const filterHandler = (filter) => {
    setActiveFilter(filter);
    child(filter);
  };

  return (
    <div className="btn-group mb-6">
      <button
        className={`btn ${activeFilter === "Fruit" ? "btn-active" : "filter"}`}
        onClick={() => filterHandler("Fruit")}
      >
        Fruit
      </button>
      <button
        className={`btn ${
          activeFilter === "Vegetable" ? "btn-active" : "filter"
        }`}
        onClick={() => filterHandler("Vegetable")}
      >
        Vegetable
      </button>
      <button
        className={`btn ${activeFilter === "All" ? "btn-active" : "filter"}`}
        onClick={() => filterHandler("All")}
      >
        All
      </button>
    </div>
  );
};

export default Filter;
