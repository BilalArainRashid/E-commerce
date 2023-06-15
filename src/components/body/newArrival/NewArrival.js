/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import RightImage from "./NewArrivalRight.png";
import LeftImage from "./NewArrivalLeft.png";
import { TfiStar } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/actions";
import Materials from "../../data/materials.js";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { useSelector } from "react-redux";

const NewArrival = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState(null);

  const notification = () => {
    setIsNavbarVisible(true);
    clearTimeout(notificationTimeout);
    const timeout = setTimeout(() => {
      setIsNavbarVisible(false);
    }, 4000);
    setNotificationTimeout(timeout);
  };

  const handleNotificationHover = () => {
    clearTimeout(notificationTimeout);
  };

  const handleNotificationLeave = () => {
    const timeout = setTimeout(() => {
      setIsNavbarVisible(false);
    }, 4000);
    setNotificationTimeout(timeout);
  };

  const addProduct = (Item) => {
    setIsLoading(true);
    dispatch(addCart(Item));
    setTimeout(() => {
      setIsLoading(false);
      notification();
    }, 1000);
  };

  const navigate = useNavigate();
  const gotoProductView = () => {
    navigate("/ProductView");
  };

  return (
    <div>
      {state.map((Item) => (
        <div key={Item.id}>
          {isNavbarVisible && (
            <div
              className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
              onMouseEnter={handleNotificationHover}
              onMouseLeave={handleNotificationLeave}
            >
              <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                <div className="text-gray-400">Successfully added.</div>
                <a className="flex items-center space-x-1">
                  <div>View Cart</div>
                  <div>
                    <AiOutlineShoppingCart />
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <div>
                  <img
                    className="h-24 w-20 mx-6 object-cover object-center"
                    src={Item.image}
                    alt="blog"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start">
                  <p className="text-xs font-bold">{Item.name}</p>
                  <p className="text-xs text-gray-400">{Item.size}</p>
                  <p className="text-sm">{Item.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="md:w-1/2 mb-3 px-4">
                <div className="md:h-72  overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                    src={LeftImage}
                  />
                </div>
                <div className="mt-3 md:mt-10">
                  <p className="text-xl font-semibold text-gray-500 ">Bestsellers </p>
                  <h2 className="title-font  font-bold text-4xl text-gray-800  mt-3 mb-3">
                    Always trendy red
                  </h2>
                  <button className=" text-1xl cursor-pointer font-semibold  mt-3 text-white bg-red-600 border-0 py-1 px-5 focus:outline-none hover:bg-red-500 rounded-full ">
                    Shop more
                  </button>
                </div>
              </div>
              <div className="md:w-1/2  px-4 ">
                <div className=" mt-3">
                  <p className="text-xl font-semibold text-gray-500 ">New Arrival </p>
                  <h2 className="title-font  font-bold text-4xl text-gray-800  mt-3 mb-3">
                    Color of the year
                  </h2>
                  <button className=" text-1xl cursor-pointer font-semibold mb-10 mt-2 text-white bg-red-600 border-0 py-1 px-5 focus:outline-none hover:bg-red-500 rounded-full ">
                    Shop more
                  </button>
                </div>
                <div className="md:h-72 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                    src={RightImage}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default NewArrival;