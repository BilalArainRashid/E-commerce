import React from 'react'
import DiscountCode from './DiscountCode'
import { AiOutlineRight, AiOutlineCheckCircle, AiOutlineLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";


const Shipping = () => {

    const navigate = useNavigate();
    const gotoViewcart = () => {
      navigate("/viewcart");
    };
    const gotoCheckout = () => {
      navigate("/Checkout");
    };
    const gotoPayment = () => {
        navigate("/Payment");
      };


    return (
        <div className='w-full  flex'>
            <div className='MAIN w-2/3 flex flex-col ml-28 mt-[50px]  '>
                <div className='HEADING w-3/4 '>
                    <h1 className='  pl-3 text-[28px] mt-1'> Fastor Boxed</h1>
                    <nav className=" pl-3 flex space-x-2 mt-3">
                        <a className="inline-block text-xs text-cyan-700 cursor-pointer" onClick={() => gotoViewcart()} > Cart </a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#information" className="inline-block mr-6 text-cyan-700 text-xs cursor-pointer" onClick={() => gotoCheckout()}>Information  </a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#shipping" className="inline-block mr-6 text-gray-900 text-xs cursor-text">Shipping</a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#payment" className="inline-block text-xs text-gray-400 cursor-text">Payment</a>
                    </nav>
                </div>
                <div className='ml-3 INFO flex flex-col w-4/5 border-2 h-20 rounded-lg text-sm mt-7'>
                    <div className=' flex h-10 pl-4 pt-3'>
                        <div className=' flex w-full justify-between'>
                            <div>
                                <p>Contact</p>
                            </div>
                            <p className='text-cyan-700 cursor-pointer pr-5 text-xs'>Change</p>
                        </div>
                    </div>
                    <hr className="border  mx-4" />
                    <div className='flex h-10 pl-4 pt-3'>
                        <div className=' flex w-full justify-between'>
                            <div>
                                <p>Ship to</p>
                            </div>
                            <p className='text-cyan-700 cursor-pointer pr-5 text-xs'>Change</p>
                        </div>
                    </div>
                </div>
                <div className='SHIPPING ml-3 mt-10 text-lg w-4/5 '>
                    <p>Shipping method</p>
                    <div className='flex border-2 w-full pt-4 mt-4 h-3/4 '>
                        <div className='flex w-full justify-between'>
                            <div className='flex ml-4  space-x-5'>
                                <AiOutlineCheckCircle />
                                <p className='text-sm'>International Shipping</p>
                            </div>
                            <p className='text-sm mr-5 font-semibold'>$20.00</p>
                        </div>
                    </div>
                </div>
                <div className='PAYMENT flex w-4/5 justify-between mt-10 ml-3 '>
                    <h1 className='  mb-3 top-0 left-0 flex text-left text-sm mt-5 text-sky-700 cursor-pointer' onClick={() => gotoCheckout()} ><AiOutlineLeft className='mt-1 mr-2 ' /> Return to information </h1>
                    <button className=' text-white bg-sky-700 border-0 px-7  py-5 font-bold focus:outline-none duration-500 hover:bg-sky-800 rounded-md text-sm' onClick={() => gotoPayment()}>Continue to payment</button>
                </div>
                <hr className=' border w-4/5 ml-3 mt-12 '></hr>
                  <div className='h-11 mt-3 pl-4'>
                    <p className=' text-sky-700 text-xs cursor-pointer '> Subscription policy</p>
                  </div>
            </div>
            <div className='w-2/4 border-l-2 border-stone-200  bg-stone-100'><DiscountCode /></div>
        </div>
    )
}

export default Shipping