import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import Materials from '../components/data/materials';

const Compare = ({ product, onClose }) => {

    const [otherProducts, setOtherProducts] = useState(Materials.filter((Item) => Item.id !== product.id));

    const navigate = useNavigate();
    const gotoProductView = () => {
        navigate("/ProductView");
    };

    return (
        <div className='flex flex-col justify-center w-full  items-center mt-2'>
            <div className='flex ' >
                <h2 className='font-semibold text-3xl'>COMPARE</h2>
                <h2 className='absolute font-thin right-5 text-3xl cursor-default' onClick={onClose} >x</h2>
            </div>
            <div className='flex w-full h-full'>
                <div className='w-52 border-black border-r-4 h-80 flex flex-col items-center'>
                    <div className='flex h-28 w-full justify-center border-gray-300 border-b-2 items-center'>
                        <h1 className='text-lg font-semibold'>IMAGE</h1>
                    </div>
                    <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>NAME</h2>
                    <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>PRICE</h2>
                    <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>RATING</h2>
                    <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>AVAILABILITY</h2>
                    <div className='border-b-2 border-gray-300 h-12 w-full'></div>
                </div>
                <div className='w-full flex'>
                    <div className='flex flex-col w-2/4 border-gray-300 border-r-2 h-80'>
                        <div className='w-full h-28 border-gray-300 border-b-2 flex justify-center items-center'>
                            <div className='h-20 w-[60px]  relative '>
                                <img src={product.image} alt="" className="h-full" />
                                <div className='absolute -top-2  left-0 bg-white text-black hover:bg-black hover:text-white cursor-pointer rounded-full h-5 w-5 text-center'>x</div>
                            </div>
                        </div>
                        <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>{product.title}</h2>
                        <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>${product.price}</h2>
                        <div className='border-b-2 border-gray-300 w-full flex  justify-center h-10 items-center space-x-2'>
                            <div className='flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>
                            <p>3 reviews</p>
                        </div>
                        <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-thin'>in stock</h2>
                        <div className='border-b-2 border-gray-300 h-12 w-full flex justify-center'>
                            <button className='bg-red-600 hover:bg-red-500 text-white text-xl font-semibold w-44'>Select Options</button>
                        </div>
                    </div>
                    {otherProducts.map((Item) => (
                        <div className='flex flex-col w-2/4 h-80'>

                            <div className='w-full h-28 border-gray-300 border-b-2 flex justify-center items-center'>
                                <div className='h-20 w-[60px]  relative '>
                                    <img src={Item.image} alt="" className="h-full" />
                                    <div className='absolute -top-2 left-0 bg-white text-black hover:bg-black hover:text-white cursor-pointer rounded-full h-5 w-5 text-center'>x</div>
                                </div>
                            </div>
                            <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>{Item.name}</h2>
                            <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-semibold'>${Item.price}</h2>
                            <div className='border-b-2 border-gray-300 w-full flex  justify-center h-10 items-center space-x-2'>
                                <div className='flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>
                                <p>3 reviews</p>
                            </div>
                            <h2 className='border-b-2 border-gray-300 w-full flex justify-center h-10 items-center font-thin'>in stock</h2>
                            <div className='border-b-2 border-gray-300 h-12 w-full flex justify-center'>
                                <button className='bg-red-600 hover:bg-red-500 text-white text-xl font-semibold w-44'>Select Options</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Compare