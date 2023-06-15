/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TbShoe } from "react-icons/tb";
import { BsEyeglasses } from "react-icons/bs";
import { RiTShirt2Line } from "react-icons/ri";
import { GiTrousers } from "react-icons/gi";
import { GiUnderwearShorts } from "react-icons/gi";
import { GiBilledCap } from "react-icons/gi";

const DirectLink = () => {
  return (
    <div class="flex flex-wrap justify-center gap-6 mt-10 sm:mt-28 lg:justify-center lg:space-x-12">
      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <TbShoe />
        </a>
        <h1 class="mt-5 text-sm">shoes</h1>
      </div>

      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <BsEyeglasses />
        </a>
        <div class="mt-5 text-sm">glasses</div>
      </div>

      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <RiTShirt2Line />
        </a>
        <p class="mt-5 text-sm">shirts</p>
      </div>

      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <GiTrousers />
        </a>
        <h1 class="mt-5 text-sm">Trousers</h1>
      </div>

      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <GiUnderwearShorts />
        </a>
        <h1 class="mt-5 text-sm">Swimwear</h1>
      </div>

      <div class="flex flex-col items-center text-4xl cursor-pointer">
        <a class="hover:-translate-y-2 hover:text-red-600">
          <GiBilledCap />
        </a>
        <h1 class="mt-5 text-sm">hat</h1>
      </div>
    </div>


  );
};

export default DirectLink;
