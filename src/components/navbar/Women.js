/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TfiStar } from "react-icons/tfi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import WomenLeft from "./womenleft.png";
import WomenMid from "./womenmid.png";
import WomenRight from "./womenright.png";

const Women = ({ hoverWomen }) => {
  return (
    <div>
      <div className={hoverWomen ? "visited" : "hidden"}>
        <section className="absolute z-20 bg-white w-full text-gray-600 body-font overflow-hidden px-20 py-32">
          <div className=" ">
            <div className="-my-8">
              <div className="py-8 flex flex-wrap md:flex-nowrap  ">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <h2 className=" text-gray-500  text-sm mb-7">Women</h2>
                  <ul className="list">
                    <li className="pb-3">
                      <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Jacket & Coats
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Dresses
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Jeans
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Lingerie
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Loungewear
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        short
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        skirt
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Suits
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Swimwear
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Tops
                      </a>
                    </li>
                    <li className="pb-3">
                      <a className="text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                        Trousers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:flex-grow ">
                  <section className="text-gray-600 body-font">
                    <div className="container">
                      <div className="flex justify-end">
                        <div className=" w-1/3 ">
                          <div className=" w-full h-80 relative">
                            <img
                              alt="gallery"
                              className="absolute pb-10 -my-12 w-96 object-cover object-center"
                              src={WomenRight}
                            />
                          </div>
                        </div>
                        <div className=" w-1/3 ">
                          <div className=" w-full h-80 relative">
                            <img
                              alt="gallery"
                              className="absolute w-full object-cover h-full object-center"
                              src={WomenMid}
                            />
                            <div className=" relative z-10 w-full pt-12 pl-8">
                              <h2 className="text-xl text-white font-medium title-font ">
                                Street Style
                                <br />
                                has it own
                                <br />
                                rules
                              </h2>
                              <a className="mt-7 text-white inline-flex items-center">
                                <HiOutlineArrowLongRight />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3 px-10">
                          <div className="relative w-full h-80 ">
                            <img
                              alt="gallery"
                              className="w-full object-cover h-full object-center   absolute "
                              src={WomenLeft}
                            />
                            <div className="relative z-10 w-full pt-2 pl-3">
                              <a className="rounded-full bg-white font-semibold text-black border text-xs py-1 px-3 ">
                                8% OFF
                              </a>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-gray-900 text-sm title-font mb-1">
                              HP LP3065
                            </p>
                            <p className="text-gray-900 mt-1">$16.00</p>
                            <ul className="flex mt-1">
                              <li>
                                <TfiStar />
                              </li>
                              <li>
                                <TfiStar />
                              </li>
                              <li>
                                <TfiStar />
                              </li>
                              <li>
                                <TfiStar />
                              </li>
                              <li>
                                <TfiStar />
                              </li>
                            </ul>
                            <div className="flex flex-wrap -m-5 mt-1">
                              <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                                <div className="flex justify-center">
                                  <div className="image-box h-6 border rounded-full ">
                                    <img
                                      alt="gallery"
                                      className="w-full h-full object-cover object-center rounded-full"
                                      src={WomenMid}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                                <div className="flex justify-center">
                                  <div className="image-box w-11 h-6 border rounded-full ">
                                    <img
                                      alt="gallery"
                                      className="w-full h-full object-cover object-center rounded-full"
                                      src={WomenMid}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="lg:w-1/6 sm:w-1/2 p-4 ">
                                <div className="flex justify-center">
                                  <div className="image-box w-11 h-6 border rounded-full ">
                                    <img
                                      alt="gallery"
                                      className="w-full h-full object-cover object-center rounded-full"
                                      src={WomenMid}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Women;
