import React from "react";
import Navbar from "../../navbar/mainNavbar/Navbar";
import FilterBar from "./FilterBar";
import MainFooter from "../../footer/MainFooter";
import BottomFooter from "../../footer/BottomFooter";
import ExtraInfo from "../../body/productList/ExtraInfo";
import Top from "../../../common/Top";

const Products = () => {
  return (
    <div>
        <Navbar />
        <div className="flex my-28 mx-28">
        
        <FilterBar />
      </div>
      <Top />
      <ExtraInfo/>
      <MainFooter/>
      <BottomFooter/>
    </div>
  );
};

export default Products;
