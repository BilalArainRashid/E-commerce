import React from "react";
import Navbar from "../navbar/mainNavbar/Navbar";
import FilterBar from "./FilterBar";
import LeftBar from "./LeftBar";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="flex my-28 mx-28">
        <LeftBar />
        <FilterBar />
      </div>
    </div>
  );
};

export default Products;
