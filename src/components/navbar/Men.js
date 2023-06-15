/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenUp from "./menup.png";
import MenBottom from "./menbottom.png";

const Men = ({ hoverMen }) => {
  return (
    <div className={`${hoverMen ? "visible" : "hidden"}`}>
      <div className="absolute z-20">
        <div className="">
          <div className=" bg-white  px-20 pt-10 h-full">
            <div className="flex flex-wrap md:text-left">
              <div className="lg:w-3/6 md:w-1/2 w-full px-4 -my-8">
                <h2 className=" text-gray-500 text-sm mb-3">Men</h2>
                <nav className="list-none py-4">
                  <div className="row grid gap-2 grid-cols-3">
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
                    </div>
                    <div className="center-list  ">
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
                    </div>
                    <div className="right-list  ">
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
                    </div>
                  </div>
                </nav>
              </div>
              <div className="lg:w-3/6 md:w-1/2 w-full">
                <div className="rounded-lg h-full w-full overflow-hidden -my-4">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={MenUp}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={MenBottom} alt="Men Bottom" />
        </div>
        <div>
          <div className="absolute bottom-10 right-80 text-white space-y-6">
            <h2 className="text-4xl font-medium">
              The latest men's trends
              <br />
              this season
            </h2>
            <p className="text-lg">New Collection!</p>
            <button className="bg-red-600 px-7 py-2 rounded-full text-lg">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
