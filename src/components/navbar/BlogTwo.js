/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ExtraInfo from "../body/productList/ExtraInfo";
import Navbar from "./mainNavbar/Navbar";
import Image from ".//womenmid.png";
import MainFooter from "../footer/MainFooter";
import BottomFooter from "../footer/BottomFooter";
import Top from "../../common/Top";

const BlogTwo = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoBlog = () => {
    navigate("/Blog");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col px-24 py-28">
        <div className="flex flex-row space-x-2 py-8">
          <a
            onClick={() => gotoHome()}
            className="font-thin text-gray-500 hover:text-black cursor-pointer text-sm"
          >
            Home
          </a>
          <AiOutlineRight className="pt-1 text-gray-500" />
          <a href="#" className="cursor-pointer text-sm">
            News
          </a>
        </div>

        <div className="text-4xl font-semibold pb-9 pt-5">
          <h1>News</h1>
        </div>

        <div className="flex flex-row space-x-5 text-md ">
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Buy it
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Collection
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Design
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Fastor
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Fashion
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Features
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Gaming
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Love
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Men
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Mobile
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Passion
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Portfolio
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Quality
          </a>
          <a href="#" className="hover:text-red-600 cursor-pointer">
            Women
          </a>
        </div>
        <div className="pt-5">
          <hr />
        </div>
      </div>

      <div>
        <div className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-20 text-center">
              <div className="sm:w-1/2 px-4">
                <div className="h-96 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full cursor-pointer "
                    src={Image}
                  />
                </div>
                <div className="flex flex-col text-black space-y-2 pt-5">
                  <h2 className="text-3xl hover:text-red-600 cursor-pointer">
                    Fusce sapien urna feugiat
                  </h2>
                  <p className="text-xs">May 28, 2021</p>
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="g h-96 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full cursor-pointer"
                    src={Image}
                  />
                </div>
                <div className="flex flex-col text-black space-y-2 pt-5">
                  <h2 className="text-3xl hover:text-red-600 cursor-pointer">
                    Fusce sapien urna feugiat
                  </h2>
                  <p className="text-xs">May 28, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-20 text-center">
              <div className="sm:w-1/2 px-4">
                <div className="h-96 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full cursor-pointer "
                    src={Image}
                  />
                </div>
                <div className="flex flex-col text-black space-y-2 pt-5">
                  <h2 className="text-3xl hover:text-red-600 cursor-pointer">
                    Fusce sapien urna feugiat
                  </h2>
                  <p className="text-xs">May 28, 2021</p>
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="g h-96 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full cursor-pointer"
                    src={Image}
                  />
                </div>
                <div className="flex flex-col text-black space-y-2 pt-5">
                  <h2 className="text-3xl hover:text-red-600 cursor-pointer">
                    Fusce sapien urna feugiat
                  </h2>
                  <p className="text-xs">May 28, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-1 mt-10 pb-9 justify-center text-xl">
          <div className="flex text-xl h-10 w-10 pt-2.5 hover:text-white   hover:bg-black cursor-pointer justify-center  align-text-center rounded-full">
            <a href="#">
              <AiOutlineLeft />
            </a>
          </div>
          <a
            onClick={() => gotoBlog()}
            className="flex text-xl h-10 w-10 pt-1.5 hover:bg-black hover:text-white cursor-pointer rounded-full justify-center align-text-center"
          >
            1
          </a>
          <a className="flex text-xl h-10 w-10 pt-1.5 hover:bg-black hover:text-white cursor-pointer rounded-full align-text-center justify-center">
            2
          </a>
          <div className="flex text-xl h-10 w-10 pt-2.5 hover:text-white   hover:bg-black cursor-pointer justify-center align-text-center rounded-full">
            <a href="#">
              <AiOutlineRight />
            </a>
          </div>
        </div>
      </div>
      <div>
      <Top />
        <ExtraInfo />
        <MainFooter />
        <BottomFooter />
      </div>
    </div>
  );
};

export default BlogTwo;
