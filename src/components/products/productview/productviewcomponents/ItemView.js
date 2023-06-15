import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoIosStats } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { GoChevronRight } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import Materials from '../../../data/materials'
import Compare from '../../../../common/Compare'
import { useSelector } from "react-redux";




const ItemView = () => {

    const { id } = useParams();
    const Item = Materials.find((Item) => Item.id === parseInt(id));

    const [showCompare, setShowCompare] = useState(false);

    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    const gotoProducts = () => {
        navigate("/Products");
    };

    const gotoProductView = () => {
        navigate("/ProductView");
    };

    const gotoCompare = () => {
        navigate("/Compare");
    };

    




    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        setAgreed(!agreed);
    };
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    };



    const [scrollPosition, setScrollPosition] = useState(0);
    const [showArrows, setShowArrows] = useState(false);

    const images = [
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_1024x1024@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_1_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/samsung_tab_1_80b59129-aa37-4451-a296-c4a7d257df20_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/canon_eos_5d_2_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/macbook_pro_2_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/macbook_pro_2_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/macbook_pro_3_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/macbook_pro_4_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_3_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_3_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_3_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_3_110x110@2x.jpg?v=1631616336",
        "https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_5_110x110@2x.jpg?v=1631616336"
    ];



    const handleScrollUp = () => {
        setScrollPosition(prevPosition => prevPosition - 24);
    };

    const handleScrollDown = () => {
        setScrollPosition(prevPosition => prevPosition + 24);
    };

    return (
        <section class=" text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div className="flex items-center mx-4 text-xs pl-12 mt-4 space-x-1 ">
                    <a className="text-gray-500 cursor-pointer" onClick={() => gotoHome()}>Home</a>
                    <GoChevronRight className="text-gray-500" />
                    <a className="text-gray-500 cursor-pointer" onClick={() => gotoProducts()}>Products</a>
                    <GoChevronRight className="text-gray-500" />
                    <a className="text-gray-500 cursor-pointer" onClick={() => gotoProductView()}>Apple Cinema 30"</a>
                </div>
                <div class="lg:w-4/5 mx-auto flex">

                    <div className=' w-24 h-[800px] relative overflow-hidden mt-3' onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
                        <div
                            className="absolute top-0 left-0"
                            style={{ transform: `translateY(-${scrollPosition}px)` }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="block w-20 h-24 mb-2"
                                />
                            ))}
                        </div>
                        {showArrows && (
                            <>
                                <button
                                    onClick={handleScrollUp}
                                    className="absolute top-0 left-0 w-full py-1 bg-gray-500 opacity-50 hover:opacity-75 transition-opacity duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mx-auto text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleScrollDown}
                                    className="absolute bottom-0 left-0 w-full py-1 bg-gray-500 opacity-50 hover:opacity-75 transition-opacity duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mx-auto text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    <div
                        className="relative w-[600px] bg-gray-100 h-[800px]   overflow-hidden mt-3 ml-9"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={Item.image}
                            className="absolute bg-gray-400 top-0 left-0 w-[600px] h-[800px] object-cover"
                            style={{
                                transform: `scale(${isHovered ? 1.9 : 1.1}) translate(${(x - 200) / 10}px, ${(y - 700) / 10}px)`,
                            }}
                        />
                        {isHovered && (
                            <>
                                <div className="absolute ml-2 h-full flex justify-center">
                                    <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-2  text-black hover:bg-blue-800 hover:text-white cursor-pointer'>
                                        <BsChevronCompactLeft size={20} />
                                    </div>
                                </div>
                                <div className="absolute right-0 mt-[400px] flex  justify-center">
                                    <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full font-bold p-2 text-black hover:bg-blue-800 hover:text-white cursor-pointer'>
                                        <BsChevronCompactRight size={20} />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>





                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-0">
                        <h2 class="text-xs title-font pb-4 text-gray-500 tracking-widest">Canon</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{Item.name}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-3 h-3 text-black" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-3 ml-1 h-3 text-black" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-3 ml-1 h-3 text-black" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-3 h-3 ml-1 text-black" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3 ml-1 h-3 text-black" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <a href='#' class="text-gray-600 ml-3 text-xs hover:text-red-500 duration-500">Write a Review</a>
                            </span>

                        </div>
                        <span className='flex space-x-6 text-xs'>
                            <p class="text-gray-500">Product Code</p>
                            <p className='text-black'>Product 16</p>
                        </span>
                        <span className='flex space-x-10 mb-7 text-xs'>
                            <p class="text-gray-500">Availability</p>
                            <p className='text-black'>In Stock</p>
                        </span>
                        <span class="title-font pt-3 font-medium  text-4xl text-red-500">${Item.price}</span>
                        <p className='mt-3 text-sm font-semibold'>Hurry! Only 10 left in stock.</p>
                        <div class="flex flex-col mt-4 ">
                            <div className='text-sm font-semibold' >
                                <p>Color</p>
                            </div>
                            <div className='mt-2 pl-2'>
                                <button class="border-2 hover:border-2 border-black active focus:outline-none">
                                    <img alt="ecommerce" class="h-16 w-12    bg-center rounded" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_1024x1024@2x.jpg?v=1631616336" />
                                </button>
                                <button class="border-2 ml-3 hover:border-2 hover:border-black  focus:outline-none">
                                    <img alt="ecommerce" class="h-16 w-12    bg-center rounded" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/nikon_d300_1_1024x1024@2x.jpg?v=1631616336" />
                                </button>
                                <button class="border-2 ml-3 hover:border-2 hover:border-black  focus:outline-none">
                                    <img alt="ecommerce" class="h-16 w-12  bg-center rounded" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/samsung_tab_1_80b59129-aa37-4451-a296-c4a7d257df20_1024x1024@2x.jpg?v=1631616336" />
                                </button>
                            </div>
                            <div class="flex flex-col mt-3 text-sm mb-3">
                                <div>
                                    <span class="mr-3">Size</span>
                                </div>
                                <div className='mt-3'>
                                    <button class="border-2 border-black text-sm rounded-full w-14 h-8 focus:outline-none">S</button>
                                    <button class="border-2 hover:border-black ml-2 duration-500  text-sm rounded-full w-14 h-8 focus:outline-none">M</button>
                                    <button class="border-2 hover:border-black ml-2 duration-500  text-sm rounded-full w-14 h-8 focus:outline-none">L</button>
                                    <a href='#' className='underline pl-12 hover:text-red-500 duration-300 text-xs'>Size guide</a>
                                </div>

                            </div>
                        </div>
                        <div class="flex mb-2 text-sm mt-2">
                            <h2 className='flex'>Quantity</h2>
                        </div>
                        <div className='flex'>
                            <div class="flex items-center rounded-full border-2 mr-5 w-32">
                                <button class="  text-black pb-3 py-2 px-4 text-xl " onClick={handleDecrement}>-</button>
                                <span class="pl-5">{quantity}</span>
                                <button class="  text-black py-2 pl-8 text-xl rounded-r" onClick={handleIncrement}>+</button>
                            </div>
                            <button class="flex  text-white bg-gray-900 border-0 w-72 h-12 pt-3 rounded-full align-center justify-center py-2 px-6 focus:outline-none hover:bg-gray-900 duration-[350ms] ">Add to Cart</button>
                        </div>

                        <div class="flex flex-col mt-2">
                            <label class="flex items-center hover:text-black mt-6">
                                <input
                                    type="checkbox"
                                    class="cursor-pointer form-checkbox text-black  w-5 h-5 "
                                    checked={agreed}
                                    onChange={handleAgree}
                                />
                                <span class="ml-2 cursor-pointer text-sm">I agree to the <a href='#' className='hover:text-red-700 '>Terms and Conditions</a></span>
                            </label>
                            <button
                                class={`mt-6 ${agreed ? "  bg-gray-900  text-white font-bold py-2 px-4 w-[440px] rounded-full" : " border-2 border-gray-900 text-gray-800 mt-6 font-bold w-[440px] py-2 px-4 rounded-full cursor-default"
                                    }`}
                                disabled={!agreed}>Buy it now</button>
                        </div>

                        <div className='flex space-x-20'>
                            <a href='#' className=' flex text-xs mt-4 hover:text-red-700'><CiHeart className='w-6 h-4' />Add to Wishlist</a>
                            <a className='flex text-xs mt-4 hover:text-red-700 cursor-pointer' onClick={() => setShowCompare(true)}><IoIosStats className='w-6 h-4' />Add to Compare</a>
                            <a href='#' className='flex text-xs mt-4 hover:text-red-700 '><AiOutlineMail className='w-6 h-4' />Ask about product</a>
                        </div>

                        <span class="flex ml-3 pl-3 mt-4 py-2 space-x-5 border-gray-200 space-x-2s">
                            <a class="text-black hover:text-blue-900 cursor-pointer duration-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="text-black hover:text-blue-600 cursor-pointer duration-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a><BsPinterest className='w-6 h-6 text-black hover:text-red-700 duration-500 cursor-pointer' /></a>
                        </span>

                    </div>
                </div>
            </div>
            {showCompare && <Compare product={Item} onClose={() => setShowCompare(false)} />}
        </section>
    )
}

export default ItemView