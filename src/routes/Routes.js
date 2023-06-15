import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/home/Homepage";
import Accounts from "../components/navbar/Accounts";
import Blog from "../components/navbar/Blog";
import BlogTwo from "../components/navbar/BlogTwo";
import Liked from "../components/navbar/Liked";
import Products from "../components/products/productlist/Products";
import {Provider} from 'react-redux'
import store from '../redux/store/store'
import ViewCart from "../components/cart/viewcart/ViewCart";
import CheckOut from "../components/cart/checkout/CheckOut";
import Shipping from "../components/cart/checkout/Shipping";
import Payment from "../components/cart/checkout/Payment";
import Paypal from "../components/cart/paypalcontent/Paypal";
import CreatePaypal from "../components/cart/paypalcontent/CreatePaypal";
import ProductView from "../components/products/productview/ProductView";
import Compare from "../common/Compare";



// it is line for store working not
store.subscribe(()=>console.log(store.getState()))


function Routs() {
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogTwo" element={<BlogTwo />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Liked" element={<Liked />} />
        <Route path="/viewcart" element={<ViewCart/>} />
        <Route path="/Checkout" element={<CheckOut/>} />
        <Route path="//paypal" element={<Paypal/>} />
        <Route path="/Shipping" element={<Shipping/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/createpaypal" element={<CreatePaypal/>} />
        <Route path="/Products/:id" element={<ProductView/>} />
        <Route path="/Compare" element={<Compare/>} />
      </Routes>
      </Provider>
    </div>
  );
}

export default Routs;