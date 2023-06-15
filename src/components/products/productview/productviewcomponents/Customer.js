import React from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"


const Customer = () => {
    return (
        <div className='main mt-20 w-full  h-[700px] flex flex-col justify-center  items-center text-center '>
            <div className='w-3/4 flex flex-col'>
                <div className='submain1 border-gray-200 border-b-2 h-36 flex flex-col  text-center '>
                    <h1 className='text-3xl font-semibold mt-4'>Customer Reviews</h1>
                    <div className='flex justify-center text-sm mt-6'>
                        <div className='flex pt-1 mr-5'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></div>
                        <p className='text-sm mr-3'>Based on 12 reviews</p>
                        <p className='font-bold text-sm mr-3'>-</p>
                        <a href='#' className='underline hover:text-red-600 text-sm'>Write a review</a>
                    </div>
                </div>
                <div className='submain2 h-28 flex border-gray-200  border-b-2'>
                    <div className='left h-20 w-44'>
                        <div className='flex mt-7 text-lg'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    </div>
                    <div className='mid1 h-20 w-44'>
                        <p className='text-xs mt-7'>hey on Oct 24, 2022</p>
                    </div>
                    <div className='mid2 pl-4 w-44 h-20 flex flex-col'>
                        <p className='mt-7 text-sm font-semibold'>nice</p>
                        <p className='text-xs mt-3'>i like</p>
                    </div>
                    <div className='right w-60  h-20  ml-[800px]'>
                        <p className='text-xs cursor-pointer text-gray-400 mt-2'>Report as Inappropriate</p>
                    </div>
                </div>
                <div className='submain3 h-28 flex border-gray-200 border-b-2'>
                    <div className='left h-20 w-44'>
                        <div className='flex mt-7 text-lg'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    </div>
                    <div className='mid1 h-20 w-44'>
                        <p className='text-xs mt-7'>Jimmy on Jun 15, 2022</p>
                    </div>
                    <div className='mid2 w-44 pl-4 h-20  flex flex-col'>
                        <p className='mt-7 text-sm font-semibold'>Great theme!</p>
                        <p className='text-xs mt-3'>Nice!</p>
                    </div>
                    <div className='right w-60 h-20 ml-[800px]'>
                        <p className='text-xs cursor-pointer text-gray-400  mt-2'>Report as Inappropriate</p>
                    </div>
                </div>
                <div className='submain4 h-28 flex border-gray-200 border-b-2'>
                    <div className='left  h-20 w-44'>
                        <div className='flex mt-7 text-lg'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    </div>
                    <div className='mid1 h-20 w-44 '>
                        <p className='text-xs mt-7'>mo on May 29, 2022</p>
                    </div>
                    <div className='mid2 w-44 pl-4 h-20  flex flex-col'>
                        <p className='mt-7 text-sm font-semibold'>test</p>
                        <p className='text-xs mt-3'>fint</p>
                    </div>
                    <div className='right w-60 h-20  ml-[800px]'>
                        <p className='text-xs cursor-pointer text-gray-400  mt-2'>Report as Inappropriate</p>
                    </div>
                </div>
                <div className='submain5 h-28 flex border-gray-200 border-b-2'>
                    <div className='left  h-20 w-44'>
                        <div className='flex mt-7 text-lg'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    </div>
                    <div className='mid1 h-20 w-44 '>
                        <p className='text-xs mt-7'>tommy huang on Feb 22, 2022</p>
                    </div>
                    <div className='mid2 pl-4 w-44 h-20 flex flex-col'>
                        <p className='mt-7 text-sm font-semibold'>test for fastor</p>
                        <p className='text-xs mt-3'>test for fastor</p>
                    </div>
                    <div className='right w-60 h-20  ml-[800px]'>
                        <p className='text-xs cursor-pointer text-gray-400  mt-2'>Report as Inappropriate</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-1 mt-10 pb-9 justify-center text-xl">
                    <div className="flex text-xl h-10 w-10 pt-2.5 hover:text-white   hover:bg-black cursor-pointer justify-center  align-text-center rounded-full">
                        <a href="#">
                            <AiOutlineLeft />
                        </a>
                    </div>
                    <a className="flex text-xl h-10 w-10 pt-1.5 hover:bg-black hover:text-white cursor-pointer rounded-full justify-center align-text-center">
                        1
                    </a>
                    <a

                        className="flex text-xl h-10 w-10 pt-1.5 hover:bg-black hover:text-white cursor-pointer rounded-full align-text-center justify-center"
                    >
                        2
                    </a>
                    <div className="flex text-xl h-10 w-10 pt-2.5 hover:text-white   hover:bg-black cursor-pointer justify-center align-text-center rounded-full">
                        <a href="#">
                            <AiOutlineRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer