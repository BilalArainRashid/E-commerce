/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import ExtraInfo from "../body/productList/ExtraInfo";
import BottomFooter from "../footer/BottomFooter";
import MainFooter from "../footer/MainFooter";
import Navbar from "./mainNavbar/Navbar";

const Accounts = () => {
  const [showReg, setShowReg] = useState(false);
  const [showSign, setShowSign] = useState(true);
  const [showrest, setrestpassword] = useState(false);
  const onReg = () => {
    setShowReg(true);
    setShowSign(false);
    setrestpassword(false);
  };
  const onSign = () => {
    setShowReg(false);
    setShowSign(true);
    setrestpassword(false);
  };
  const onRest = () => {
    setShowReg(false);
    setShowSign(false);
    setrestpassword(true);
  };

  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <section className="">
          <div className="px-5 py-28 bg-neutral-800 h-80 mx-auto">
            <div className="flex flex-col pt-14 text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-white">
                Account
              </h1>
              <div className="flex justify-center space-x-2">
                <a
                  onClick={() => gotoHome()}
                  className="flex items-center space-x-2 leading-relaxed text-gray-500 cursor-pointer hover:text-white text-sm"
                >
                  Home
                  <div className="pl-1">
                    <AiOutlineRight />
                  </div>
                </a>
                <p className="  leading-relaxed text-white text-sm">Account</p>
              </div>
            </div>
          </div>
        </section>

        <div className=" w-96 mx-auto  mt-28 mb-11">
          <div className="flex">
            <button
              className="w-full text-1xl border-b  text-gray-700 hover:border-red-500 py-4 "
              type="button"
              onClick={onSign}
            >
              SIGN IN
            </button>
            <button
              className="w-full text-1xl border-b  text-gray-700 hover:border-red-500 py-4 "
              type="button"
              onClick={onReg}
            >
              REGISTER
            </button>
          </div>

          {showSign ? (
            <form className="bg-white pt-6 pl-1 ">
              <div className="mb-4">
                <label
                  className=" text-sm text-gray-400 font-semi-bold mb-2 pl-1"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="text-gray-400 text-sm font-semi-bold mb-2 pl-1"
                  for="password"
                  onClick={onRest}
                >
                  Password
                </label>
                <input
                  className="border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
                <p
                  className="flex justify-end text-red-500 text-xs pr-2 cursor-pointer"
                  onClick={onRest}
                >
                  last your password?
                </p>
              </div>
              <div className="">
                <button
                  className="w-full text-xs bg-red-600 hover:bg-red-500 text-white font-bold py-3 "
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          ) : null}

          {showReg ? (
            <form className="bg-white pt-6 pl-1 ">
              <div className="mb-4">
                <label
                  className=" text-sm text-gray-400 font-semi-bold mb-2 pl-1"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 "
                  id="firstName"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="text-gray-400 text-sm font-semi-bold mb-2 pl-1"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  className=" border  w-full py-2 px-3 text-gray-700 mb-3 "
                  id="lastName"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="text-gray-400 text-sm font-semi-bold mb-2 pl-1"
                  for="email"
                >
                  Your email address:
                </label>
                <input
                  className=" border  w-full py-2 px-3 text-gray-700 mb-3 "
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-1">
                <label
                  className="text-gray-400 text-sm font-semi-bold mb-2 pl-1"
                  for="password"
                >
                  Password
                </label>
                <input
                  className=" border  w-full py-2 px-3 text-gray-700 mb-3 "
                  id="password"
                  type="text"
                />
              </div>
              <div className="flex items-start mb-3">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I agree to the privacy policy
                  </label>
                </div>
              </div>
              <div className="">
                <button
                  className="w-full text-xs bg-red-600 hover:bg-red-500 text-white font-bold py-3 "
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          ) : null}

          {showrest ? (
            <form className="bg-white pt-5 pl-1 ">
              <h1 className="text-3xl font-bold">Reset your password</h1>
              <p className="text-gray-400 text-xs py-4">
                We will send you an email to reset your password.
              </p>
              <div className="mb-4">
                <label
                  className="text-gray-400 text-sm font-semi-bold mb-2 pl-1"
                  for="email"
                >
                  Email
                </label>
                <input
                  className=" border  w-full py-2 px-3 text-gray-700 mb-3 "
                  id="email"
                  type="email"
                />
              </div>

              <div className="">
                <button
                  className="w-full text-xs bg-red-600 hover:bg-red-500 text-white font-bold py-3 "
                  type="button"
                >
                  Submit
                </button>
                <div className="flex justify-end my-2">
                  <div className="text-sm pr-3">
                    <p
                      className="text-gray-600 hover:text-red-500 cursor-pointer"
                      onClick={onSign}
                    >
                      Cancel
                    </p>
                  </div>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
      <ExtraInfo />
      <MainFooter />
      <BottomFooter />
    </div>
  );
};

export default Accounts;
