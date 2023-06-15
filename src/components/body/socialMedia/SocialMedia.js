/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import Socialmedia from "./socialmedia.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SocialMedia = () => {

  // Responsive settings for react-slick slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 534,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Express yourself with #fastor <br />
              on instagram
            </h1>
          </div>
          <Slider {...settings}>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a className="block relative h-48 overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block hover:scale-110 transition duration-0 ease-in-out"
                  src={Socialmedia}
                />
                <div className="absolute z-10 text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-neutral-900">
                  <div className="flex justify-center pt-20 text-4xl">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </a>
            </div>
          </Slider>
          <div className="flex flex-col text-center w-full mb-12">
            <p className="sm:text-sm tex-base underline cursor-pointer  title-font mb-4 text-gray-700 hover:text-red-600">
              Follow Us on Instagram
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
