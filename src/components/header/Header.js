import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import HeaderImage from "./header.png";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(false);
    setTimeout(() => {
      setTextVisible(true);
    }, 500);
  }, [currentSlide]);

  const handlePrevClick = () => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
      setTimeout(() => {
        setTextVisible(true);
      }, 500);
    }, 500);
  };

  const handleNextClick = () => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
      setTimeout(() => {
        setTextVisible(true);
      }, 500);
    }, 500);
  };

  const slides = [
    {
      id: 0,
      url: "https://cdn.shopify.com/s/files/1/0020/7483/7110/files/pexels-marlon-schmeiski-2506776_1903x630@2x.png?v=1620709277",
      text1: "Fashion",
      text2: "in the rhythm",
      text3: "of salsa",
      text4: "Create unlimited & Powerfull Sliders...",
    },
    {
      id: 1,
      url: "https://cdn.shopify.com/s/files/1/0020/7483/7110/files/pexels-jermaine-ulinwa-3395706_1903x630@2x.png?v=1620710156",
      text1: "The latest",
      text2: `men's trends`,
      text3: "this season",
      text4: "Create unlimited & Powerfull Sliders...",
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/0020/7483/7110/files/pexels-godisable-jacob-833186_1903x630@2x.png?v=1620710156",
      text1: "Big patterns",
      text2: "are back in",
      text3: "fashion!",
      text4: "Create unlimited & Powerfull Sliders...",
    },
  ];
  return (
    <div className="relative w-full h-screen z-10">
      <div className="flex  z-10">
        <div
          style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          className="w-full h-screen  bg-center bg-cover duration-700"
        ></div>
        <div className="absolute h-full w-full z-20 pt-4">
          {/* Left Arrow */}
          <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-2 bg-black/20 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
            <BsChevronCompactLeft onClick={handlePrevClick} size={13} />
          </div>

          {/* Right Arrow */}
          <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
            <BsChevronCompactRight onClick={handleNextClick} size={13} />
          </div>

          <div className="flex flex-col flex-wrap z-20 w-80 ">
            <div
              className={`absolute bottom-0 my-48 min-[996px]:my-32 xl:my-72 xl:mx-48 ml-3 sm:ml-10 transition duration-700 ease-in-out opacity-0 ${
                textVisible ? "opacity-100" : "opacity-00"
              } transform ${
                textVisible ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <h2
                className={`text-${
                  currentSlide === 2 ? "black" : "white"
                } text-4xl min-[996px]:text-7xl mb-1 font-semibold`}
              >
                {slides[currentSlide].text1}
              </h2>
              <h2
                className={`text-${
                  currentSlide === 2 ? "black" : "white"
                } text-4xl min-[996px]:text-7xl mb-1 font-semibold`}
              >
                {slides[currentSlide].text2}
              </h2>
              <h2
                className={`text-${
                  currentSlide === 2 ? "black" : "white"
                } text-4xl min-[996px]:text-7xl mb-4 min-[996px]:mb-10 font-semibold`}
              >
                {slides[currentSlide].text3}
              </h2>
              <h2
                className={`text-${
                  currentSlide === 2 ? "black" : "white"
                } text-lg mb-4 min-[996px]:mb-10 font-semibold`}
              >
                {slides[currentSlide].text4}
              </h2>
            </div>
            <div className="ml-2 sm:ml-10 sm:mt-18 min-[996px]:mt-32 xl:ml-48 xl:my-64  mt-20">
              <button
                type="button"
                className={`bg-red-600 text-white absolute w-40 h-12  rounded-full mt-64 font-bold text-lg pb-1 hover:bg-red-500  transition duration-500  ease-in-out opacity-0 ${
                  textVisible ? " opacity-100" : "opacity-0"
                } transform ${
                  textVisible ? "translate-y-0" : "translate-y-full"
                }  `}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-20">
        <img src={HeaderImage} alt="HeaderImage" className="" />
      </div>
      <div className="absolute text-white -my-[650px] mx-32 space-y-6">
        <h2 className="text-7xl font-medium">
          Fashion
          <br />
          in the rhythm
          <br />
          of sales
        </h2>
        <p className="text-lg">Create unlimited & Powerfull Slides...</p>
        <button className="bg-red-600 px-9 py-2 rounded-full text-lg">
          Shop now
        </button>
      </div> */}
    </div>
  );
};

export default Header;
