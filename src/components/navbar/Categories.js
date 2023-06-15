import React, { useState, useEffect } from "react";
import GirlImage from "./girls.png";
import BoyImage from "./boy.png";
import ShoesImage from "./shoes.png";
import BagsImage from "./bag.png";
import GlassesImage from "./glasses.png";
import JewelryImage from "./jewelary.png";
import Loader from "../loader/Loader";

const Categories = ({ hoverCategory }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // set loading to false after 2 seconds
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <div className={`${hoverCategory ? "visible" : "hidden"}`}>
            <section className="text-gray-600 ">
              <div className="w-full absolute z-20 bg-white px-36 py-10 pt-10 pr-52 -mr-2">
                <div className="flex flex-wrap -m-5">
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border bg-gray-200 overflow-hidden rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={GirlImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Women
                    </h2>
                  </div>
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border bg-gray-200 overflow-hidden rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={BoyImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Men
                    </h2>
                  </div>
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border overflow-hidden bg-gray-200 rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={ShoesImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Shoes
                    </h2>
                  </div>
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border bg-gray-200 overflow-hidden rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={BagsImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Bags
                    </h2>
                  </div>
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border bg-gray-200 overflow-hidden rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={GlassesImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Glasses
                    </h2>
                  </div>
                  <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                    <div className="flex justify-center">
                      <div className="image-box relative w-40 h-40 border bg-gray-200 overflow-hidden rounded-full ">
                        <img
                          alt="gallery"
                          className="w-full h-full object-cover object-center rounded-full hover:transform hover:-rotate-6 hover:-translate-x-4 hover:duration-300 "
                          src={JewelryImage}
                        />
                      </div>
                    </div>
                    <h2 className="title-font text-1xl  cursor-pointer hover:text-red-500  text-center  text-gray-900 px-10 mt-6 mb-3">
                      Jewelry
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;