import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai"



const SimilarItem = () => {
    const [agreed, setAgreed] = useState(false);
    const [newagreed, setNewAgreed] = useState(false);
    const [agree] = useState(true);



    const handleAgree = () => {
        setAgreed(!agreed);
    };

    const newHandleAgree = () => {
        setNewAgreed(!newagreed);
    };

    return (
        <div className='Main w-full h-full mb-20'>
            <div className='Sub-main flex flex-col justify-center'>
                <div className='flex justify-center'>
                    <h2 className='font-semibold text-3xl'>Frequently bought together.</h2>
                </div>
                <div className='flex flex-row w-full '>
                    <div className='flex w-3/5 pl-44'>
                        <div class="p-4 w-[250px] h-[315px]">
                            <a class=" relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_280x315@2x.jpg?v=1631616336" />
                            </a>
                            <div class="mt-4">
                                <h3 class=" text-sm  title-font hover:text-red-600 duration-500 cursor-pointer mb-1">Apple Cinema 30"</h3>
                                <span class="text-red-500 title-font text-lg font-medium">from $146.00</span>
                                <span className='text-gray-400 font-sm line-through pl-3'>$150.00</span>
                                <div className='flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></div>

                            </div>
                        </div>

                        <div className='flex'>
                            {agreed && (
                                <>
                                    <h1 className='mt-60 text-5xl'>+</h1>
                                    <div class="p-4 w-[250px] h-[315px]">
                                        <a class=" relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/canon_eos_5d_1_280x315@2x.jpg?v=1527928409" />
                                        </a>
                                        <div class="mt-4">
                                            <h3 class=" text-sm  title-font hover:text-red-600 duration-500 cursor-pointer mb-1">Canon EOS 5D</h3>
                                            <span class="text-red-500 title-font text-lg font-medium">$98.00</span>
                                            <span className='text-gray-400 font-sm line-through pl-3'>$122.00</span>
                                            <div className='flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                        </div>
                                    </div>

                                </>
                            )}
                        </div>
                        <div className='flex'>
                            {newagreed && (
                                <>
                                    <h1 className='mt-60 text-5xl'>+</h1>
                                    <div class="p-4 w-[250px] h-[315px] ">
                                        <a class=" relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/products/IMG_280x315@2x.png?v=1622627522" />
                                        </a>
                                        <div class="mt-4">
                                            <h3 class=" text-sm  title-font hover:text-red-600 duration-500 cursor-pointer mb-1">New checkered shirt with long...</h3>
                                            <span class="text-red-500 title-font text-lg font-medium">from $146.00</span>
                                            <span className='text-gray-400 font-sm line-through pl-3'>$150.00</span>
                                            <div className='flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></div>
                                        </div>
                                    </div>

                                </>
                            )}

                        </div>
                    </div>
                    <div className='flex flex-col w-1/4 '>
                        <div className="flex items-center hover:text-black mt-6">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox bg-black border-black h-5 w-5 text-black" checked={agree} />
                                <span className="ml-2 text-gray-700">Apple Cinema 30"</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center hover:text-black mt-4">
                                <input
                                    type="checkbox"
                                    class="cursor-pointer form-checkbox text-black  w-5 h-5 "
                                    checked={agreed}
                                    onChange={handleAgree}
                                />
                                <span className="ml-2 text-gray-700">Canon EOS 5D</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center hover:text-black mt-4">
                                <input
                                    type="checkbox"
                                    class="cursor-pointer form-checkbox text-black  w-5 h-5 "
                                    checked={newagreed}
                                    onChange={newHandleAgree}
                                />
                                <span className="ml-2 text-gray-700">New checkered shirt with long sleeves</span>
                            </label>
                        </div>
                        <div className='mt-6'>
                            <p className='text-sm'>Buy selected for</p>
                            <div>
                                {agree && !agreed && !newagreed && (
                                    <div className='mt-2'>
                                        <span className='text-4xl font-semibold text-red-600'>$146.00</span>
                                        <span className='text-gray-400 font-sm line-through pl-3'>$150.00</span>
                                    </div>
                                )}
                                {agreed && !newagreed && (
                                    <div className='mt-2'>
                                        <span className='text-4xl font-semibold text-red-600'>$244.00</span>
                                        <span className='text-gray-400 font-sm line-through pl-3'>$280.00</span>
                                    </div>
                                )}
                                {newagreed && !agreed && (
                                    <div className='mt-2'>
                                        <span className='text-4xl font-semibold text-red-600'>$292.00</span>
                                        <span className='text-gray-400 font-sm line-through pl-3'>$316.00</span>
                                    </div>
                                )}
                                {agreed && newagreed && (
                                    <div className='mt-2'>
                                        <span className='text-4xl font-semibold text-red-600'>$390.00</span>
                                        <span className='text-gray-400 font-sm line-through pl-3'>$438.00</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className='flex justify-center hover:bg-slate-800  mt-5 bg-slate-900 w-[300px] h-[50px] text-lg rounded-full text-white'><div className='flex mt-3'><AiOutlineShoppingCart className='mt-1 mr-2' /> Add all to Cart</div></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SimilarItem