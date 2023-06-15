import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoIosStats } from 'react-icons/io'
import AddToCartButton from "../../../common/AddToCartButton";
import { TfiStar } from "react-icons/tfi";
import Materials from "../../data/materials.js";
import { useNavigate, Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewArrivalSlider = () => {
    const navigate = useNavigate();
    const gotoLiked = () => {
        navigate("/Liked");
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: (
            <button className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-12 h-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 transition-colors duration-300 ease-in-out">
                <BsChevronCompactLeft className="text-gray-600 w-6 h-6" />
            </button>
        ),
        nextArrow: (
            <button className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-12 h-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 transition-colors duration-300 ease-in-out">
                <BsChevronCompactRight className="text-gray-600 w-6 h-6" />
            </button>
        ),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
        ],
    };



    return (
        <div className='relative ' >
            <div className="flex flex-col  w-full justify-center  items-center container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        New Arrivals
                    </h1>
                </div>

                <div className="mx-auto max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl px-4 md:px-8 lg:px-16 xl:px-24">
                    <Slider {...settings}>
                        {Materials.map((Item) => (
                            <div key={Item.id} className="px-4 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 ">
                                <div className="relative block w-full   group h-96">
                                    <Link to={`/Products/${Item.id}`} >
                                        <img
                                            className="absolute inset-0 object-cover w-full h-96 group-hover:opacity-100 cursor-pointer"
                                            src={Item.image}
                                        /></Link>
                                    <div className="relative ">
                                        <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="absolute top-2 right-4 flex flex-col space-y-4">
                                                <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10" onClick={() => gotoLiked()}><AiOutlineHeart /></div>
                                                <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10" ><IoIosStats /></div>
                                                <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10"><AiOutlineSearch /></div>
                                            </div>
                                            <AddToCartButton Item={Item} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-col">
                                    <p className="text-gray-900 text-sm  tracking-widest title-font mb-1">
                                        {Item.name}
                                    </p>
                                    <p className="text-gray-900 mt-1">${Item.price}</p>
                                    <ul className="mt-1 flex">
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
                                </div>
                            </div>
                        ))}
                    </Slider>


                </div>

            </div>
        </div>


    )
}

export default NewArrivalSlider