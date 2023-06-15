/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const LeftBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClickk=()=>{
    console.log("this is my");
  }
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };

  const slides = [
    {
      title1: "Canon EOS 5D",
      title2: "$98",
      url1: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/canon_eos_5d_1_100x100@2x.jpg?v=1527928409",

      title3: "HP LP3065",
      title4: "$122.00",
      url2: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/hp_3_4d72d9a1-51aa-4c7b-af3a-d72e0158d9db_100x100@2x.jpg?v=1527928392",

      title5: "HTC Touch HD",
      title6: "$122.00",
      url3: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/htc_touch_hd_1_5b5c42b2-cfbf-476d-ae13-52462ce47dd5_100x100@2x.jpg?v=1542857603",
    },
    {
      title1: "iMac",
      title2: "$100.00",
      url1: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/canon_eos_5d_2_8a793690-08f4-4b9a-9675-01180700a939_100x100@2x.jpg?v=1622123642",

      title3: `Apple Cinema 30"`,
      title4: "$146.00",
      url2: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_100x100@2x.jpg?v=1631616336",

      title5: "iPhone",
      title6: "$123.20",
      url3: "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/iphone_1_42851c40-c45f-419c-863d-bbf906637cb0_100x100@2x.jpg?v=1527928406",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div>
        <div className="flex items-center mx-4 text-xs pb-6 space-x-1">
          <a
            onClick={() => gotoHome()}
            className="text-gray-500 cursor-pointer"
          >
            Homepage
          </a>
          <GoChevronRight className="text-gray-500" />
          <p>Products</p>
        </div>
        <p className="mx-4 text-4xl font-bold pb-1">Products</p>
        <div className="relative w-[280px] -b ">
          <input
            className="peer absolute  top-0 right-0 w-7 h-12 opacity-0 z-10 cursor-pointer "
            type="checkbox"
          />
          <div className=" h-12 w-full flex items-center ">
            <h1 className="font-semibold pl-4">All Categories</h1>
          </div>

          <div className=" absolute top-3 right-3 transition-all duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex bg-white overflow-hidden transition-all duration-1000 max-h-45    peer-checked:max-h-0">
            <div className="p-4">
              <nav className="flex flex-col space-y-3 list-none -b-2">
                <li>
                  <a className="text-black font-medium hover:text-red-700 cursor-pointer" onClick={() => onClickk()}  >
                    Jeans
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Jacket&Coats
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Loungewear
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Underwear
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Jeans
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Shirt
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Short
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Suit
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Swimwear
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    TrackSuit
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold hover:text-red-700 cursor-pointer">
                    Trouser
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className=" border-b"></div>
        </div>

        <div className="relative w-[280px] -b ">
          <input
            className="peer absolute  top-0 right-0 w-7 h-12 opacity-0 z-10 cursor-pointer "
            type="checkbox"
          />
          <div className=" h-12 w-full flex items-center ">
            <h1 className="font-semibold pl-4">Size</h1>
          </div>

          <div className=" absolute top-3 right-3 transition-all duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex bg-white overflow-hidden transition-all duration-500 max-h-45 peer-checked:max-h-0">
            <div className="p-4 w-full">
              <nav className="flex flex-col space-y-3 list-none">
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center">
                      <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        S
                      </a>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (56)
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        M
                      </a>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (76)
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <label className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        L
                      </a>
                    </label>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (80)
                    </div>
                  </div>
                </li>
              </nav>
            </div>
          </div>
          <div className=" border-b"></div>
        </div>
        

        <div className="relative w-[280px] -b ">
          <input
            className="peer absolute  top-0 right-0 w-7 h-12 opacity-0 z-10 cursor-pointer "
            type="checkbox"
          />
          <div className=" h-12 w-full flex items-center ">
            <h1 className="font-semibold pl-4">Size</h1>
          </div>

          <div className=" absolute top-3 right-3 transition-all duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex bg-white overflow-hidden transition-all duration-500 max-h-45    peer-checked:max-h-0">
            <div className="p-4 w-full">
              <nav className="flex flex-col space-y-3 list-none">
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center">
                      <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        S
                      </a>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (56)
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        M
                      </a>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (76)
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <a className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 ">
                        L
                      </a>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (80)
                    </div>
                  </div>
                </li>
              </nav>
            </div>
          </div>
          <div className=" border-b"></div>
        </div>

        <div className="relative w-[280px] -b ">
          <input
            className="peer absolute  top-0 right-0 w-7 h-12 opacity-0 z-10 cursor-pointer "
            type="checkbox"
          />
          <div className=" h-12 w-full flex items-center ">
            <h1 className="font-semibold pl-4">Product type</h1>
          </div>

          <div className=" absolute top-3 right-3 transition-all duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* ...... */}
          <div className="flex bg-white overflow-hidden transition-all duration-500 max-h-45    peer-checked:max-h-0">
            <div className="p-4 w-full">
              <nav className="flex flex-col space-y-3 list-none">
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <label
                        for="red-checkbox"
                        className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 "
                      >
                        Type
                      </label>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (56)
                    </div>
                  </div>
                </li>
              </nav>
            </div>
          </div>
          <div className=" border-b"></div>
        </div>

        <div className="relative w-[280px] -b ">
          <input
            className="peer absolute  top-0 right-0 w-7 h-12 opacity-0 z-10 cursor-pointer "
            type="checkbox"
          />
          <div className=" h-12 w-full flex items-center ">
            <h1 className="font-semibold pl-4">Product type</h1>
          </div>

          <div className=" absolute top-3 right-3 transition-all duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* ...... */}
          <div className="flex bg-white overflow-hidden transition-all duration-500 max-h-45    peer-checked:max-h-0">
            <div className="p-4 w-full">
              <nav className="flex flex-col space-y-3 list-none">
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <label
                        for="red-checkbox"
                        className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 "
                      >
                        in Stock
                      </label>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (78)
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="row flex  w-full justify-between  mr-4">
                    <div className="row flex items-center ">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 -gray-300"
                      />
                      <label
                        for="red-checkbox"
                        className="ml-2 text-sm font-medium text-gray-700 hover:text-red-700 "
                      >
                        out of stock
                      </label>
                    </div>
                    <div className="row text-gray-400 hover:text-red-600 ">
                      (78)
                    </div>
                  </div>
                </li>
              </nav>
            </div>
          </div>
          <div className=" border-b"></div>
      
        </div>
        <div className="relative w-[280px] -b ">
        <div className="flex flex-col mt-5  w-[280px]">
        <div className="flex w-72 border-b-2">
          <h2 className=" font-bold">Our Featured</h2>
          <div className="flex pl-36 cursor-pointer">
            <AiOutlineLeft
              onClick={prevSlide}
              className="mt-1 duration-700"
              size={15}
            />
            <AiOutlineRight
              onClick={nextSlide}
              className="mt-1  ml-2 duration-700"
              size={15}
            />
          </div>
        </div>
        <div className="flex w-72 h-full mt-5">
          <img
            style={{ backgroundImage: `url(${slides[currentIndex].url1})` }}
            className="w-28 h-28 bg-cover bg-center cursor-pointer"
          ></img>
          <div className="pl-3 pt-5">
            <h2 className="hover:text-red-500 cursor-pointer duration-300 ">
              {slides[currentIndex].title1}
       ‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡