import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsTruck } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";

const ExtraInfo = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 534,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: (dots) => (
      <div className="flex items-center justify-center space-x-10">
        {dots.map((dot) => (
          <button
            className={`w-2 h-2  focus:outline-none ${dot.props.className.includes("slick-active") ? "bg-red-500 w-6 rounded-lg" : "bg-gray-100 "
              }`}
          >
          </button>
        ))}
      </div>
    ),
  };


  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="flex justify-center space-x-5 text-2xl items-center p-0 ">
            <BsTruck />
            <h2 className="text-sm text-gray-600">Free Delivery</h2>
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-5 text-2xl items-center p-0 ">
            <BsBox />
            <h2 className="text-sm text-gray-600">Non-contact shipping</h2>
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-5 text-2xl items-center p-0 ">
            <TfiWallet />
            <h2 className="text-sm text-gray-600">Money back guarantee</h2>
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-5 text-2xl items-center p-0 ">
            <RiSecurePaymentLine />
            <h2 className="text-sm text-gray-600">Secure payments</h2>
          </div>
        </div>
      </Slider>

    </div>
  );
};

export default ExtraInfo;
