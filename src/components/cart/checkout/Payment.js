import { React, useState} from 'react'
import DiscountCode from './DiscountCode'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import paypal from '../../cart/paypal.svg'



const Payment = () => {

    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [expDate, setExpDate] = useState('')
    const [secureCode, setSecureCode] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [city, setCity] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [apartment, setApartment] = useState('')
    const [value, setValue] = useState('');
    const [country, setCountry] = useState('')


    const [paymentOption, setPaymentOption] = useState('creditCard');

    function handlePaymentOptionChange(event) {
        setPaymentOption(event.target.value);
    }

    const [billingOption, setBillingOption] = useState('address')

    function handleBillingOptionChange(event) {
        setBillingOption(event.target.value);
    }

    const navigate = useNavigate();
    const gotoViewcart = () => {
        navigate("/viewcart");
    };
    const gotoCheckout = () => {
        navigate("/Checkout");
    };
    const gotoShipping = () => {
        navigate("/Shipping");
    };



    return (
        <div className='w-full h-[1500px] flex'>
            <div className='MAIN w-2/3 flex flex-col ml-28 mt-[50px] h-full '>
                <div className='HEADING w-3/4 '>
                    <h1 className='  pl-3 text-[28px] mt-1'> Fastor Boxed</h1>
                    <nav className=" pl-3 flex space-x-2 mt-3">
                        <a className="inline-block text-xs text-cyan-700 cursor-pointer" onClick={() => gotoViewcart()} > Cart </a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#information" className="inline-block mr-6 text-cyan-700 text-xs cursor-pointer" onClick={() => gotoCheckout()}>Information  </a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#shipping" className="inline-block mr-6 text-xs text-cyan-700 cursor-pointer" onClick={() => gotoShipping()}>Shipping</a>
                        <div className='text-sm text-gray-500 '><AiOutlineRight /></div>
                        <a href="#payment" className="inline-block text-xs text-gray-900 cursor-text">Payment</a>
                    </nav>
                </div>
                <div className='ml-3 INFO flex flex-col w-4/5 border-2 h-32 rounded-lg text-sm mt-7'>
                    <div className=' flex h-10 pl-4 pt-3'>
                        <div className=' flex w-full justify-between'>
                            <div>
                                <p>Contact</p>
                            </div>
                            <p className='text-cyan-700 cursor-pointer pr-5 text-xs' onClick={() => gotoCheckout()}>Change</p>
                        </div>
                    </div>
                    <hr className="border  mx-4" />
                    <div className='flex h-10 pl-4 pt-3'>
                        <div className=' flex w-full justify-between'>
                            <div>
                                <p>Ship to</p>
                            </div>
                            <p className='text-cyan-700 cursor-pointer pr-5 text-xs' onClick={() => gotoCheckout()}>Change</p>
                        </div>
                    </div>
                    <hr className="border  mx-4" />
                    <div className='flex h-10 pl-4 pt-3'>
                        <div className=' flex w-full space-x-12'>
                            <p>Method</p>
                            <div className='flex'>
                                <p className='mr-1'>International Shipping</p> .
                                <p className='font-semibold ml-1'>$20.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAYMENTTTTTTTTTTTT*/}

                <div className='PAYMENT flex ml-3 mt-8 w-4/5  h-full flex-col  space-y-2'>
                    <p className='text-lg'>Payment</p>
                    <p className='text-sm'>All transactions are secure and encrypted</p>
                    <div className='flex flex-col'>
                        <div className='relative w-full boordre-black border-2'>
                            <input
                                className="peer absolute  top-0  w-full h-12 opacity-0 z-10 cursor-pointer "
                                type="radio"
                                name="paymentOption"
                                value="creditCard"
                                checked={paymentOption === 'creditCard'}
                                onChange={handlePaymentOptionChange}

                            />
                            <div className=" absolute top-3 left-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>
                            <div className=" h-12 w-full flex pl-8 items-center  ">
                                <h1 className="font-semibold text-sm pl-4">Credit card</h1>
                            </div>
                            {paymentOption === 'creditCard' && (
                                <div className="flex bg-white overflow-hidden  h-52 ">
                                    <div className='w-full h-full bg-stone-200'>
                                        <div className="relative px-4 py-2 mt-2">
                                            <input
                                                type="text"
                                                className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
                                                placeholder='Card number'
                                            />
                                            {cardNumber ? (
                                                <label
                                                    className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                >
                                                    Card number
                                                </label>
                                            ) : null}
                                        </div>
                                        <div className="relative px-4 py-2  ">
                                            <input
                                                type="text"
                                                className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                value={cardName}
                                                onChange={(e) => setCardName(e.target.value)}
                                                placeholder='Cardholder name'
                                            />
                                            {cardName ? (
                                                <label
                                                    className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                >
                                                    Name on card
                                                </label>
                                            ) : null}
                                        </div>
                                        <div className='flex w-full'>
                                            <div className='relative pl-4 pr-2 w-2/4 '>

                                                <input
                                                    type="text"
                                                    className=" block mt-3 w-full pl-2 h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                    value={expDate}
                                                    onChange={(e) => setExpDate(e.target.value)}
                                                    placeholder="Expiration date (MM / YY)"
                                                />
                                                {expDate ? (
                                                    <label
                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                    >
                                                        Expiration date (MM / YY)
                                                    </label>
                                                ) : null}
                                            </div>
                                            <div className='relative w-2/4 pl-2 pr-3 '>

                                                <input
                                                    type="text"
                                                    className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                    value={secureCode}
                                                    onChange={(e) => setSecureCode(e.target.value)}
                                                    placeholder="Security code"
                                                />
                                                {secureCode ? (
                                                    <label
                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                    >
                                                        Security code
                                                    </label>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='relative w-full border-x-2 border-b-2'>
                            <input
                                className="peer  absolute  top-0  w-full h-12 opacity-0 z-10 cursor-pointer "
                                type="radio"
                                id="paypal"
                                name="paymentOption"
                                value="paypal"
                                checked={paymentOption === 'paypal'}
                                onChange={handlePaymentOptionChange}
                            />
                            <div className=" absolute top-3 left-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>
                            <div className=" h-12 w-full flex pl-8 items-center  ">
                                <h1 className="font-semibold text-sm pl-4">Paypal</h1>
                                <img src={paypal} className='absolute right-3 h-6' />
                            </div>
                        </div>
                        {paymentOption === 'paypal' && (
                            <div className='flex flex-col'>
                                <div className='flex w-full justify-between mt-4'>

                                    <h1 className='   mb-3 top-0 left-0 flex text-left text-sm mt-3 text-sky-700 cursor-pointer' onClick={() => gotoShipping()}  ><AiOutlineLeft className='mt-1 mr-2 ' /> Return to shipping </h1>
                                    <button className="border rounded-md bg-amber-400 hover:bg-yellow-500 flex flex-row justify-center items-center space-x-2  w-4/12 h-12">
                                        <div className='flex'>
                                        <p>Pay with</p>
                                            <p className="text-base leading-4">
                                                <img src={paypal} alt="" className="h-6" />
                                            </p>
                                        </div>
                                    </button>
                                </div>
                                <hr className=' border w-full mt-12 '></hr>
                                <div className='h-11 mt-3 pl-4'>
                                    <p className=' text-sky-700 text-xs cursor-pointer '> Subscription policy</p>
                                </div>
                            </div>
                            
                        )}

                        {paymentOption === 'creditCard' && (
                            <div className='flex flex-col w-full h-full'>
                                <div className='BILLING flex  mt-8 w-full  h-full flex-col space-y-3'>
                                    <p className='text-lg'>Billing address</p>
                                    <p className='text-sm '>Select the address that matches your card or payment method.</p>
                                    <div className='flex flex-col'>
                                        <div className='relative w-full boordre-black border-2'>
                                            <input
                                                className="peer absolute  top-0  w-full h-12 opacity-0 z-10 cursor-pointer "
                                                type="radio"
                                                id="sameAddress"
                                                name="sameBillingOption"
                                                value="sameAddress"
                                                checked={billingOption === 'sameAddress'}
                                                onChange={handleBillingOptionChange}

                                            />
                                            <div className=" absolute top-3 left-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-4 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </div>
                                            <div className=" h-12 w-full flex pl-8 items-center  ">
                                                <h1 className="font-semibold text-sm pl-4">Same as shipping address</h1>
                                            </div>
                                        </div>
                                        <div className='relative w-full  boordre-black border-x-2 border-b-2'>
                                            <input
                                                className="peer absolute  top-0  w-full h-12 opacity-0 z-10 cursor-pointer "
                                                type="radio"
                                                name="billingOption"
                                                value="address"
                                                checked={billingOption === 'address'}
                                                onChange={handleBillingOptionChange}

                                            />
                                            <div className=" absolute top-3 left-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-4 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </div>
                                            <div className=" h-12 w-full flex pl-8 items-center  ">
                                                <h1 className="font-semibold text-sm pl-4">Use a different billing address</h1>
                                            </div>
                                            {billingOption === 'address' && (
                                                <div className="flex bg-white overflow-hidden border-1 ">
                                                    <div className='w-full h-full bg-stone-100 py-2'>
                                                        <div className="relative px-4  mt-2">
                                                            <input
                                                                type="text"
                                                                className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                                placeholder='Country/Region'
                                                            />
                                                            {country ? (
                                                                <label
                                                                    className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                >
                                                                    Country/Region
                                                                </label>
                                                            ) : null}
                                                        </div>
                                                        <div className='flex w-full'>
                                                            <div className='relative pl-4 pr-2 w-2/4 '>

                                                                <input
                                                                    type="text"
                                                                    className=" block mt-3 w-full pl-2 h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                    value={firstname}
                                                                    onChange={(e) => setFirstname(e.target.value)}
                                                                    placeholder="First name"
                                                                />
                                                                {firstname ? (
                                                                    <label
                                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                    >
                                                                        First name
                                                                    </label>
                                                                ) : null}
                                                            </div>
                                                            <div className='relative w-2/4 pl-2 pr-4 '>

                                                                <input
                                                                    type="text"
                                                                    className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                    value={lastname}
                                                                    onChange={(e) => setLastname(e.target.value)}
                                                                    placeholder="Last name"
                                                                />
                                                                {lastname ? (
                                                                    <label
                                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                    >
                                                                        Last name
                                                                    </label>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="relative px-4 mt-2 ">
                                                            <input
                                                                type="text"
                                                                className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                value={value}
                                                                onChange={(e) => setValue(e.target.value)}
                                                                placeholder='Address'
                                                            />
                                                            {value ? (
                                                                <label
                                                                    className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                >
                                                                    Address
                                                                </label>
                                                            ) : null}
                                                        </div>
                                                        <div className="relative px-4 mt-2  ">
                                                            <input
                                                                type="text"
                                                                className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                value={apartment}
                                                                onChange={(e) => setApartment(e.target.value)}
                                                                placeholder='Apartment, suite, etc. (optional)'
                                                            />
                                                            {value ? (
                                                                <label
                                                                    className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                >
                                                                    Apartment, suite, etc. (optional)
                                                                </label>
                                                            ) : null}
                                                        </div>
                                                        <div className='flex w-full'>
                                                            <div className='relative pl-4 pr-2 w-2/4 '>

                                                                <input
                                                                    type="text"
                                                                    className=" block mt-3 w-full pl-2 h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                    value={city}
                                                                    onChange={(e) => setCity(e.target.value)}
                                                                    placeholder="City"
                                                                />
                                                                {city ? (
                                                                    <label
                                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                    >
                                                                        City
                                                                    </label>
                                                                ) : null}
                                                            </div>
                                                            <div className='relative w-2/4 pl-2 pr-4 '>

                                                                <input
                                                                    type="text"
                                                                    className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                                    value={postalcode}
                                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                                    placeholder="Postal code"
                                                                />
                                                                {postalcode ? (
                                                                    <label
                                                                        className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out"
                                                                    >
                                                                        Postal code
                                                                    </label>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex w-full justify-between mt-2 '>
                                    <h1 className='   mb-3 top-0 left-0 flex text-left text-sm mt-5 text-sky-700 cursor-pointer' onClick={() => gotoShipping()}  ><AiOutlineLeft className='mt-1 mr-2 ' /> Return to shipping </h1>
                                    <button className=' text-white bg-sky-700 border-0 px-7 py-5 font-bold focus:outline-none duration-500 hover:bg-sky-800 rounded-md text-sm'>Pay now</button>
                                </div>
                                <hr className=' border w-full mt-12 '></hr>
                                <div className='h-11 mt-3 pl-4'>
                                    <p className=' text-sky-700 text-xs cursor-pointer '> Subscription policy</p>
                                </div>

                            </div>
                        )}

                    </div>
                </div>


            </div>




            <div className='w-2/4 border-l-2 h-screen border-stone-200  bg-stone-100'><DiscountCode /></div>
        </div >
    )
}

export default Payment