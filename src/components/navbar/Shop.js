/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';

const Shop = ({ hoverShop }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // set loading to false after 2 seconds
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        
        <div className="w-full">
          <div className={`${hoverShop ? "visible" : "hidden"}`}>
            <div >
              <hr className="text-gray-600" />
              <div className="absolute w-full z-20 bg-white px-28 pr-60">
                <div className="flex flex-wrap md:text-left pt-4">
                  <div className="lg:w-2/6 md:w-1/2 w-full pl-20">
                    <h2 className=" text-gray-500 text-sm mb-5 py-2">Men</h2>
                    <nav className="list-none py-5">
                      <div className="row flex gap-24 grid-cols-2 ">
                        <div className="left-list">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Jacket & Coats
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Suits
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Jeans
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Swimwear
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Loungewear
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              T-shirts
                            </a>
                          </li>
                        </div>
                        <div className="right-list">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Polo shirts
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Tracksuits
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Shirts
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              shorts
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Trousers
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Underwear
                            </a>
                          </li>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="lg:w-2/6 md:w-1/2 w-full px-14 ">
                    <h2 className=" text-gray-500 text-sm mb-5 py-2">Women</h2>
                    <nav className="list-none py-5 mb-10">
                      <div className="flex gap-24 grid-cols-2  ">
                        <div className="left-list ">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Jacket & Coats
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Dresses
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Jeans
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Lingerie
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Loungewear
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              shorts
                            </a>
                          </li>
                        </div>
                        <div className="right-list">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Skirts
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Suits
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Swimwear
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Tops
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Trousers
                            </a>
                          </li>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="lg:w-2/6 md:w-1/2 w-full px-20">
                    <h2 className=" text-gray-500  text-sm mb-5 py-2 ">Other</h2>
                    <nav className="list-none py-5 mb-10">
                      <div className="row flex  gap-24 grid-cols-2 ">
                        <div className="left-list">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Accessories
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Bags
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Belts
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Hats
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Watches
                            </a>
                          </li>
                        </div>
                        <div className="right-list">
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Jewellery
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Sale
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Vintage
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Designers
                            </a>
                          </li>
                          <li className="pb-3">
                            <a className=" text-gray-900 text-1xl cursor-pointer hover:text-red-500">
                              Lifestyle
                            </a>
                          </li>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 

      )}
      </div>
    
  );
};

export default Shop;
