/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsPerson, BsArrowRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./logo.png";
import Shop from "../Shop";
import Categories from "../Categories";
import Men from "../Men";
import Women from "../Women";

import { deleteCartItem } from '../../../redux/actions'
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const removeCard = (Item) => {
    dispatch(deleteCartItem(Item));
  };


  const [hoverShop, setHoverShop] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(false);
  const [hoverMen, setHoverMen] = useState(false);
  const [hoverWomen, setHoverWomen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);


  const navigate = useNavigate();
  const gotoBlog = () => {
    navigate("/Blog");
  };
  const gotoAccounts = () => {
    navigate("/Accounts");
  };
  const gotoHome = () => {
    navigate("/");
  };
  const gotoProducts = () => {
    navigate("/Products");
  };
  const gotoLiked = () => {
    navigate("/Liked");
  };
  const gotoVeiwcart = () => {
    navigate("/viewcart");
  };
  const gotoCheckout = () => {
    navigate("/checkout");
  };

  const searchicon = () => {
    setshowSearch(true)
    console.log(setshowSearch);
  }

  let total = 0;
  let totalCards = 0;
  state.map((item) => {
    return (total += item.price * item.qty);
  });

  state.map((item) => {
    return (totalCards += item.qty);
  });

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos === 0 || currentScrollPos < window.innerHeight * 0.8;
      setShowNav(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>
      <nav className={`w-full bg-white border-b border-gray-200 ${showNav ? "animate-slideDown" : "z-50 fixed top-0 animate-slideUp"}`}>
        <div className="">
          <div className="flex  top-0  justify-between py- border-b bg-white sm:px-4 dark:bg-gray-900  w-full border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between mx-auto container ">
              <a
                onClick={() => gotoHome()}
                className="flex h-10 -mx-16 cursor-pointer"
              >
                <img src={Logo} alt="Logo" />
              </a>

              <div className="flex  ml-12 items-center justify-between">
                <ul className="flex">
                  <li className="flex flex-row items-center space-x-6 text-md text-gray-700 ">

                    <a
                      onClick={() => gotoProducts()}
                      onMouseEnter={() => setHoverShop(true)}
                      onMouseLeave={() => setHoverShop(false)}
                      className="flex  items-center hover:text-red-800  pb-8 mt-8 cursor-pointer"
                    >
                      Shop
                      <IoIosArrowDown />
                      <div className="absolute right-0 w-full mt-[70px] ">
                        <Shop hoverShop={hoverShop} />
                      </div>

                    </a>

                    <a
                      onClick={() => gotoProducts()}
                      onMouseEnter={() => setHoverCategory(true)}
                      onMouseLeave={() => setHoverCategory(false)}
                      className="flex items-center hover:text-red-800 pb-8 mt-8 cursor-pointer"
                    >
                      Categories
                      <IoIosArrowDown />
                      <div className="absolute right-0 w-full mt-[70px] ">
                        <Categories hoverCategory={hoverCategory} />
                      </div>
                    </a>

                    <a
                      onClick={() => gotoProducts()}
                      onMouseEnter={() => setHoverMen(true)}
                      onMouseLeave={() => setHoverMen(false)}
                      className="flex items-center hover:text-red-800 pb-8 mt-8 cursor-pointer"
                    >
                      Men
                      <IoIosArrowDown />
                      <div className="absolute right-0 w-full mt-[90px] ">
                        <Men hoverMen={hoverMen} />
                      </div>
                    </a>

                    <a
                      onClick={() => gotoProducts()}
                      onMouseEnter={() => setHoverWomen(true)}
                      onMouseLeave={() => setHoverWomen(false)}
                      className="flex items-center  hover:text-red-800 pb-8 mt-8 cursor-pointer"
                    >
                      Women
                      <IoIosArrowDown />
                      <div className="absolute left-0 w-full mt-[90px] ">
                        <Women hoverWomen={hoverWomen} />
                      </div>
                    </a>

                    <a href="#" className="flex items-center hover:text-red-800">
                      Page
                    </a>
                    <a
                      href="#"
                      onClick={() => gotoBlog()}
                      className="flex items-center hover:text-red-800"
                    >
                      Blog
                    </a>
                    <a href="#" className="flex items-center hover:text-red-800">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex -mx-14">
                <ul className="flex flex-row space-x-7">
                  <li className="flex space-x-5 text-xl">
                    <a className="Search hover:text-red-800 text-2xl" onClick={() => searchicon()} search={setshowSearch}>
                      <AiOutlineSearch />
                    </a>

                    <a
                      onClick={() => gotoAccounts()}
                      className="Accounts hover:text-red-800 text-2xl"
                    >
                      <BsPerson />
                    </a>

                    <a
                      onClick={() => gotoLiked()}
                      className="Like hover:text-red-800 text-2xl"
                    >
                      <AiOutlineHeart />
                    </a>

                    <a
                      onClick={() => setShowNavbar(!showNavbar)}
                      className="Cart flex hover:text-red-800 text-2xl cursor-pointer"
                    >
                      <AiOutlineShoppingCart />
                      <p className="absolute text-xs bg-black text-white rounded-full w-5 text-center h-5 mx-5 -my-2 py-0.5">
                        {totalCards}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Cart">
            <div
              className={`${showNavbar ? '-translate-x-0' : 'translate-x-full'
                } fixed right-0 top-0 z-50 bg-gray-200 transform transition-all ease-in-out duration-500`}
              style={{ right: showNavbar ? 0 : "-64px" }}
            >
              <div className="">
                <div className="relative z-40 scroll-m-4 w-96 h-screen shadow-md bg-white px-1 py-5">
                  <ul className="">
                    <li className="flex flex-row space-x-28">
                      <a className="flex text-sm py-4 px-9 h-12 font-bold overflow-hidden whitespace-nowrap transition duration-300 ease-in-out">
                        SHOPPING CART
                      </a>
                      <a
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="flex items-center text-xs text-gray-500 hover:text-red-600 cursor-pointer"
                      >
                        close
                        <BsArrowRight />
                      </a>
                    </li>
                    <hr className="mx-7 my-2" />

                    {state.length > 0 ? <div className="flex flex-col w-full ">


                      <div className="border w-full h-96 overflow-y-auto">
                        {/* rock */}
                        {state.map((item) => (
                          <div
                            key={item.key}
                            className="flex w-64 h-28 border-gray-200 border-b-2 "
                          >
                            <img
                              className="w-24 h-24 cursor-pointer"
                              src={item.image}
                            />
                            <div className="ml-2 mt-2">
                              <p className="text-sm text-gray-600 hover:text-red-600 duration-500 cursor-pointer">
                                {item.name}
                              </p>
                              <span className="text-sm text-gray-400">
                                {item.qty} X{" "}
                              </span>
                              <span className="pl-2 text-sm text-gray-600">
                                ${item.price}
                              </span>

                            </div>
                            <button className=" absolute right-10 hover:text-red-600" onClick={() => removeCard(item.id)}   >X</button>
                          </div>
                        ))}
                      </div>

                      <div className="flex mt-5 h-10 space-x-28 border-gray-200 border-b-2">
                        <p className="text-sm text-gray-400">Subtotal</p>
                        <p className="font-semibold">${Math.round(total)}</p>
                      </div>
                      <div className="flex justify-center border-red-400 border-b-2 mt-4">
                        <p className="font-semibold hover:text-red-700 cursor-pointer duration-500 text-2xl" onClick={() => gotoVeiwcart()}>
                          View Cart
                        </p>
                      </div>
                      <div className="mt-3">
                        <button className="bg-slate-900 text-white font-bold w-full h-10" onClick={() => gotoCheckout()} >
                          Checkout
                        </button>
                      </div>
                    </div> : <p className="flex justify-center text-gray-500 text-xs mt-6">
                      Your cart is currently empty
                    </p>}


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showSearch ? (<div className=" absolute z-50 top-0 w-full">
        <Search search={setshowSearch} />
      </div>) : null}

    </>
  );
};

export default Navbar;
