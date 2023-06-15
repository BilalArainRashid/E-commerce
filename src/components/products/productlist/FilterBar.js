/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxDragHandleDots2, RxDragHandleDots1 } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import Materials from "../../data/materials";
import LeftBar from "./LeftBar";
import WomenMid from "../../navbar/womenmid.png";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/actions";
import { IoIosStats } from "react-icons/io";
import Skeleton from "../productlist/Skeleton";

const FilterBar = (props) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setshowTwo] = useState(false);
  const [showThree, setshowThree] = useState(false);
  const [showFour, setshowFour] = useState(false);
  const [sortOrder, setSortOrder] = useState(false);
  const [numProducts, setNumProducts] = useState(6);
  const [data, setData] = useState(Materials);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false)

  const sortedProducts = Materials;

  const handleFilterChange = (updatedList) => {
    setFilter(updatedList);
  };

  // setFilter(data)

  //
  const [notificationTimeout, setNotificationTimeout] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

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

  //

  const filterLowProduct = () => {
    const updatedList = sortedProducts
      .slice()
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setFilter(updatedList);
    console.log(updatedList);
  };

  const filterhighProduct = () => {
    console.log("high");
    const updatedList = sortedProducts
      .slice()
      .sort((a, b) => parseInt(b.price) - parseInt(a.price));
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterAZProduct = () => {
    console.log("high");
    const updatedList = sortedProducts
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterZAProduct = () => {
    console.log("high");
    const updatedList = sortedProducts
      .slice()
      .sort((a, b) => b.name.localeCompare(a.name));
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterSixProduct = () => {
    console.log("this is done");
    const updatedList = sortedProducts.slice(0, 6);
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterEightProduct = () => {
    console.log("this is done");
    const updatedList = sortedProducts.slice(0, 8);
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterNineProduct = () => {
    console.log("this is done");
    const updatedList = sortedProducts.slice(0, 9);
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterTenProduct = () => {
    console.log("this is done");
    const updatedList = sortedProducts.slice(0, 10);
    setFilter(updatedList);
    console.log(updatedList);
  };
  const filterTwlProduct = () => {
    console.log("this is done");
    const updatedList = sortedProducts.slice(0, 12);
    setFilter(updatedList);
    console.log(updatedList);
  };

  const clickOne = () => {


    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOne(true);
    }, 1000);

    setshowTwo(false);
    setshowThree(false);
    setshowFour(false);
  };

  const clickTwo = () => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setshowTwo(true);
    }, 1000);

    setShowOne(false);
    setshowThree(false);
    setshowFour(false);
  };
  const clickThree = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setshowThree(true);
    }, 1000);

    setshowFour(false);
    setshowTwo(false);
    setShowOne(false);
  };
  const clickFour = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setshowFour(true);
    }, 1000);

    setshowThree(false);
    setshowTwo(false);
    setShowOne(false);
  };

  

  return (
    <>
      <LeftBar onFilterChange={handleFilterChange} products={sortedProducts} />
      <div className="my-8">
        <div className="flex flex-row justify-between mx-3 my-4">
          <div className="flex flex-row space-x-3">
            <a className="hover:text-red-700 cursor-pointer  " onClick={() => clickOne()}>
              <BsThreeDots />
            </a>
            <a className="hover:text-red-700 cursor-pointer " onClick={() => clickTwo()}>
              <RxDragHandleDots2 />
            </a>
            <a className="hover:text-red-700 cursor-pointer " onClick={() => clickThree()}>
              <TbGridDots />
            </a>
            <a className="hover:text-red-700 cursor-pointer " onClick={() => clickFour()}>
              <RxDragHandleDots1 />
            </a>
          </div>

          <div className=" absolute right-16 text-xs">
            <div className="">
              <form>
                <label className="mx-10">Sort by</label>
                <select
                  className="mx-10"
                  onChange={(event) => {
                    const selectedOption = event.target.value;
                    if (selectedOption === "Price, low to high") {
                      filterLowProduct();
                    } else if (selectedOption === "Alphabetically, A-Z") {
                      filterAZProduct();
                    } else if (selectedOption === "Alphabetically, Z-A") {
                      filterZAProduct();
                    } else if (selectedOption === "Price, high to low") {
                      filterhighProduct();
                    }
                  }}
                >
                  <option>Featured</option>
                  <br />
                  <option>Best selling</option>
                  <br />
                  <option>Alphabetically, A-Z</option>
                  <br />
                  <option>Alphabetically, Z-A</option>
                  <br />
                  <option>Price, low to high</option>
                  <br />
                  <option>Price, high to low</option>
                  <br />
                  <option>Date, old to new</option>
                  <br />
                  <option>Date, new to old</option>
                </select>
                <label className="mx-2">Show</label>
                <select
                  className=""
                  onChange={(event) => {
                    const selectedOption = event.target.value;
                    if (selectedOption === "6") {
                      filterSixProduct();
                    } else if (selectedOption === "8") {
                      filterEightProduct();
                    } else if (selectedOption === "9") {
                      filterNineProduct();
                    } else if (selectedOption === "10") {
                      filterTenProduct();
                    } else if (selectedOption === "12") {
                      filterTwlProduct();
                    }
                  }}
                >
                  <option>6</option>
                  <br />
                  <option>8</option>
                  <br />
                  <option>9</option>
                  <br />
                  <option>10</option>
                  <br />
                  <option>12</option>
                  <br />
                  <option>14</option>
                  <br />
                  <option>15</option>
                  <br />
                  <option>16</option>
                  <br />
                  <option>20</option>
                  <br />
                  <option>24</option>
                </select>
              </form>
            </div>
          </div>
        </div>



        {loading ? (
          <>
            {showOne ? (
              <Skeleton />
            ) : (
              <>
                <Skeleton />
                
              </>
            )}
          </>
        ) : (
          <>
            {showOne ? (

              <div className="flex flex-col  ">
                {filter.map((Item) => (
                  <div key={Item.id} className="w-full flex   mt-10  ">
                    {state.map((Item) => (
                      <div key={Item.id}>
                        {isNavbarVisible && (
                          <div
                            className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
                            onMouseEnter={handleNotificationHover}
                            onMouseLeave={handleNotificationLeave}
                          >
                            <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                              <div className="text-gray-400">
                                Successfully added.
                              </div>
                              <a className="flex items-center space-x-1 cursor-pointer">
                                <div>View Cart</div>
                                <div>
                                  <AiOutlineShoppingCart />
                                </div>
                              </a>
                            </div>
                            <div className="flex items-center">
                              <div>
                                <img
                                  className="h-24 w-20 mx-6 object-cover object-center cursor-pointer"
                                  src={Item.image}
                                  alt="blog"
                                />
                              </div>
                              <div className="flex flex-col space-y-2 items-start">
                                <p className="text-xs font-bold cursor-pointer hover:text-red-800">
                                  {Item.name}
                                </p>
                                <p className="text-xs text-gray-400">{Item.size}</p>
                                <p className="text-sm">{Item.price}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="relative  w-96 group h-96">
                      <img
                        className="absolute inset-0 object-cover w-full h-96 group-hover:opacity-100"
                        src={Item.image}
                      />
                      {/* //rock */}
                      <div className="relative ">
                        <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                          <div className="absolute top-2 right-4 flex flex-col space-y-4">
                            <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                              <AiOutlineHeart />
                            </div>
                            <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                              <IoIosStats />
                            </div>
                            <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                              <AiOutlineSearch />
                            </div>
                          </div>
                          <button
                            className="absolute top-80 w-full py-3 my-5 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                            onClick={() => addProduct(Item)}
                          >
                            {isLoading ? (
                              <div className="flex justify-center items-center">
                                {/* will be adjust */}
                                {/* <span className="ml-3 pr-3">Adding card</span> */}
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              </div>
                            ) : (
                              "Add to cart"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 pl-16  w-full">
                      <p className="text-gray-700 text-xs">
                        BEST DEALS OF THE WEEK IN WOMEN
                      </p>
                      <h1 className="text-black text-3xl font-bold hover:text-red-700">
                        {Item.name}
                      </h1>
                      <p className=" text-red-600 text-2xl font-medium">
                        from ${Item.price}
                        <span className="line-through text-slate-400 pl-7">
                          $158
                        </span>
                      </p>
                      <p className="text-gray-600 text-1xl pt-8">
                        Tailored clothes available as in chain stores. These
                        settings don’t provide big changes but only some small css
                        changes in spaces or borders for example. Because we have
                        many types of elements we created Live Edit...
                      </p>
                      <div className="flex flex-wrap -m-5 mt-5">
                        <div className=" ">
                          <div className="flex space-x-4 pl-8">
                            <div className="image-box h-6 border-2 border-gray-400  rounded-full ">
                              <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center rounded-full"
                                src={WomenMid}
                              />
                            </div>
                            <div className="image-box h-6 border   rounded-full ">
                              <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center rounded-full"
                                src={WomenMid}
                              />
                            </div>
                            <div className="image-box h-6 border   rounded-full ">
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
                ))}
              </div>
            ) : null}
          </>
        )}

        {showTwo ? (
          <div>
            <div className="flex flex-wrap">
              {filter.map((Item) => (
                <div key={Item.id} className="w-1/2 p-4">
                  {state.map((Item) => (
                    <div key={Item.id}>
                      {isNavbarVisible && (
                        <div
                          className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
                          onMouseEnter={handleNotificationHover}
                          onMouseLeave={handleNotificationLeave}
                        >
                          <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                            <div className="text-gray-400">
                              Successfully added.
                            </div>
                            <a className="flex items-center space-x-1 cursor-pointer">
                              <div>View Cart</div>
                              <div>
                                <AiOutlineShoppingCart />
                              </div>
                            </a>
                          </div>
                          <div className="flex items-center">
                            <div>
                              <img
                                className="h-24 w-20 mx-6 object-cover object-center cursor-pointer"
                                src={Item.image}
                                alt="blog"
                              />
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
                              <p className="text-xs font-bold cursor-pointer hover:text-red-800">
                                {Item.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {Item.size}
                              </p>
                              <p className="text-sm">{Item.price}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="relative group">
                    <img className="" src={Item.image} alt={Item.id} />
                    <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                      <button
                        className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                        onClick={() => addProduct(Item)}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className=" text-gray-800 text-2xs hover:text-red-600">
                      {Item.name}
                    </h1>
                    <p className=" text-red-600 text-xl ">
                      from ${Item.price}
                      <span className="line-through text-slate-400 pl-4">
                        $158
                      </span>
                    </p>
                    <p className="text-1xl">{Item.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {showThree ? (
          <div>
            <div className="flex flex-wrap">
              {filter.map((Item) => (
                <div key={Item.id} className="w-1/3 p-4">
                  {state.map((Item) => (
                    <div key={Item.id}>
                      {isNavbarVisible && (
                        <div
                          className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
                          onMouseEnter={handleNotificationHover}
                          onMouseLeave={handleNotificationLeave}
                        >
                          <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                            <div className="text-gray-400">
                              Successfully added.
                            </div>
                            <a className="flex items-center space-x-1 cursor-pointer">
                              <div>View Cart</div>
                              <div>
                                <AiOutlineShoppingCart />
                              </div>
                            </a>
                          </div>
                          <div className="flex items-center">
                            <div>
                              <img
                                className="h-24 w-20 mx-6 object-cover object-center cursor-pointer"
                                src={Item.image}
                                alt="blog"
                              />
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
                              <p className="text-xs font-bold cursor-pointer hover:text-red-800">
                                {Item.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {Item.size}
                              </p>
                              <p className="text-sm">{Item.price}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="relative group">
                    <img className="" src={Item.image} alt={Item.id} />
                    <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                      <button
                        className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                        onClick={() => addProduct(Item)}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className=" text-gray-800 text-2xs hover:text-red-600">
                      {Item.name}
                    </h1>
                    <p className=" text-red-600 text-xl ">
                      from ${Item.price}
                      <span className="line-through text-slate-400 pl-4">
                        $158
                      </span>
                    </p>
                    <p className="text-1xl">{Item.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {showFour ? (
          <div>
            <div className="flex flex-wrap">
              {filter.map((Item) => (
                <div key={Item.id} className="w-1/4 p-4">
                  {state.map((Item) => (
                    <div key={Item.id}>
                      {isNavbarVisible && (
                        <div
                          className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
                          onMouseEnter={handleNotificationHover}
                          onMouseLeave={handleNotificationLeave}
                        >
                          <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                            <div className="text-gray-400">
                              Successfully added.
                            </div>
                            <a className="flex items-center space-x-1 cursor-pointer">
                              <div>View Cart</div>
                              <div>
                                <AiOutlineShoppingCart />
                              </div>
                            </a>
                          </div>
                          <div className="flex items-center">
                            <div>
                              <img
                                className="h-24 w-20 mx-6 object-cover object-center cursor-pointer"
                                src={Item.image}
                                alt="blog"
                              />
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
                              <p className="text-xs font-bold cursor-pointer hover:text-red-800">
                                {Item.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {Item.size}
                              </p>
                              <p className="text-sm">{Item.price}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="relative group">
                    <img className="" src={Item.image} alt={Item.id} />
                    <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                      <button
                        className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                        onClick={() => addProduct(Item)}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className=" text-gray-800 text-2xs hover:text-red-600">
                      {Item.name}
                    </h1>
                    <p className=" text-red-600 text-xl ">
                      from ${Item.price}
                      <span className="line-through text-slate-400 pl-4">
                        $158
                      </span>
                    </p>
                    <p className="text-1xl">{Item.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};



export default FilterBar;



