/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ExtraInfo from "../body/productList/ExtraInfo";
import BottomFooter from "../footer/BottomFooter";
import MainFooter from "../footer/MainFooter";
import Navbar from "./mainNavbar/Navbar";
import Loader from '../loader/Loader';
import Top from '../../common/Top';

const Liked = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoAccounts = () => {
    navigate("/Accounts");
  };
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
        <div>
          <Navbar />
          <div className="flex flex-col px-24 py-28">
            <div className="flex flex-row space-x-2 py-8">
              <a
                onClick={() => gotoHome()}
                className="font-thin text-gray-500 hover:text-black cursor-pointer text-sm"
              >
                Home
              </a>
              <AiOutlineRight className="pt-1 text-gray-500" />
              <a href="#" className="cursor-pointer text-sm">
                Wishlist
              </a>
            </div>

            <div className="text-4xl font-semibold pb-9 pt-5">
              <h1>Wishlist</h1>
            </div>

            <div className="flex flex-row space-x-5 text-sm ">
              <p>Sign in to sync your Saved Items across all your devices.</p>
              <a
                onClick={() => gotoAccounts()}
                className="hover:text-red-600 cursor-pointer"
              >
                Log in
              </a>
            </div>
            <div className="pt-5">
              <hr />
            </div>
          </div>
          <Top />
          <ExtraInfo />
          <MainFooter />
          <BottomFooter />
        </div>

      )}
    </div>


  );
};

export default Liked;
