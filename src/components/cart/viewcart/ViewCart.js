import React from 'react'
import { useNavigate } from "react-router-dom";

import {BsChevronDown} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart,deleteCartItem } from "../../../redux/actions";

import Navbar from '../../navbar/mainNavbar/Navbar'



function ViewCart() {
    const navigate = useNavigate();
    const gotoCheckout = () => {
      navigate("/Checkout");
    };

    // const [quantity, setQuantity] = useState(0);
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    const dispatch = useDispatch();
  
    const addItem = (Item) => {
      dispatch(addCart(Item));
    };
    const removeItem = (product) => {
      dispatch(delCart(product));
    };
    const removeCard = (Item) => {
      dispatch(deleteCartItem(Item));
    };
    let total = 0;
  let totalCards = 0;
  state.map((item) => {
    return (total += item.price * item.qty);
  });

  state.map((item) => {
    return (totalCards += item.qty);
  });
  

  return (
    <>
    <Navbar/>
    {state.length > 0 ? <div className='main  w- ml-44  h-[800px]'>
            <div className='submain1  h-20'>
                <h1 className='text-4xl font-bold mt-4'>Shopping Cart</h1>
            </div>
            <div className='submain2 flex    h-[720px]'>
                <div className='left w-[1000px] h-[720px]'>
                    <div className='upper border-b-2 w-[950px] flex pt-2 h-12'>
                        <p className=''>Product</p>
                        <p className='ml-[420px] '>Price</p>
                        <p className='ml-40'>Quantity</p>
                        <p className='ml-40'>Subtotal</p>
                    </div>
                    {state.map((Item)=>(
                        <div key={Item.key} className='upper2 border-b-2 w-[950px] flex  h-44'>
                        
                        <div className='ml-2 mt-[75px] hover:text-red-500 duration-300'><button className=' ' onClick={() =>  removeCard(Item.id) } ><RxCross2/></button></div>
                        <img src={Item.image} className='w-24 h-32 mt-5 ml-12' />
                        <div className='flex flex-col  ml-[100px] pt-12'>
                            <p className='text-gray-700 hover:text-red-600 duration-500 cursor-pointer text-sm'>{Item.name}</p>
                            {/* <p className='text-xs text-gray-500 mt-1'></p> */}
                            <p className='text-xs text-gray-500 mt-1'>Size: S</p>
                        </div>
                        <p className='text-red-500 mt-[75px] ml-[85px]'>{Item.price}</p>
                        <div className='w-44 ml-24 flex'>
                            <div class="flex items-center h-12 rounded-full border-2 ml-4 mt-[60px] w-32">
                                <button class="  text-black pb-3 py-2 px-4 text-xl " onClick={() =>  removeItem(Item) } >-</button>
                                <span class="pl-5">{Item.qty}</span>
                                <button class="  text-black py-2 pl-8 text-xl rounded-r" onClick={() =>  addItem(Item) } >+</button>
                            </div>
                        </div>
                        <p className='text-red-500 mt-[75px] ml-[100px]'>{Item.price*Item.qty}</p>
                    </div>
                    ))}
                    
                    <div className='mid border-b-2 w-[950px]'>

                        <div
                            className=" px-3 py-2 cursor-pointer w-full flex text-slate-900"
                            
                        >
                            <div className=' w-[300px] hover:text-red-500 font-semibold text-sm duration-500'><p className=''>ADD A NOTE TO YOUR ORDER</p></div>
                            <div className=' w-24 ml-[545px] pl-20 pt-1'><BsChevronDown/> </div>
                            <i className="fas fa-angle-down ml-2"></i>
                        </div>
                        
                            <div className="absolute z-10 ">
                                <input
                                    type="text"
                                    className="bg-white border border-gray-300  h-20 w-[950px] focus:outline-none"
                                    
                                    
                                />
                            </div>
                        
                    </div>
                    <div className='lower flex h-44'>
                        <div className='left flex flex-col'>
                            <input
                                type="text"
                                className='w-72 rounded-full border-2 h-10 text-sm mt-4 pl-4 '
                                placeholder='Coupon code'
                            />
                            <p className='text-xs mt-4'>Enter coupon code. It will be applied at checkout.</p>
                        </div>
                        <div className='right '>
                        </div>
                        <div className='right  w-44 h-10 ml-[500px] pl-[100px] pt-4 mt-2 text-lg underline font-semibold '>
                            <a href='#'>Update</a>
                        </div>
                    </div>
                </div>
                <div className='right  border-2 bg-gray-200 w-[400px] h-[720px]'>
                    <div className='upper  h-[360px]'>
                        <div className='subupper pt-5 font-semibold text-3xl pl-5  h-20'>
                            <h1>Cart totals</h1>
                        </div>
                        <div className='sublower'>

                        </div>
                    </div>
                    <div className='lower  h-[360px]'>
                        <div className='h-12 pl-[190px] text-xl font-semibold pt-2'>
                            <h1 className='hover:border-b-2 hover:border-slate-900 w-[178px] cursor-pointer duration-300 '>Calculate shipping</h1>
                        </div>
                        <div className='h-12 space-x-52 w-[350px] ml-5 pt-2 border-b-2 border-slate-400 flex text-sm'>
                            <p>Subtotal</p>
                            <p>$146.00 USD</p>
                        </div>
                        <div className=' h-12 space-x-[70px] border-b-2 w-[350px] ml-5 border-slate-400 pt-3 flex '>
                            <p className='text-sm'>Shipping</p>
                            <p className='text-xs'>Taxes and shipping calculated at checkout</p>
                        </div>
                        <div className=' h-[60px] w-[350px] ml-5 space-x-44  pt-3 flex '>
                            <p className='text-sm'>Total</p>
                            <h3 className='text-2xl font-semibold'>${Math.round(total)}<span></span> USD </h3>
                        </div>
                        
                        <button className='bg-slate-900 text-white font-bold w-[350px] ml-5 h-12 rounded-full' onClick={() => gotoCheckout()} >Process to checkout</button>
                        <button className='w-[350px] ml-5 h-12 bg-yellow-500 mt-3'>Paypal</button>
                    </div>
                </div>
            </div>
        </div> :<div className='mt-48'>
            <h1 className=' text-lg font-bold'>Shopping Cart</h1>
            <h1>Your Cart</h1>
        </div>}


        

    
    </>
  )
}

export default ViewCart



