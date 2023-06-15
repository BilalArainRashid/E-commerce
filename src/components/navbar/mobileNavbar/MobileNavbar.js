import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRight, AiOutlineLeft, AiOutlineShoppingCart } from "react-icons/ai"
import { FaAngleDown } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem } from '../../../redux/actions';


function Men() {
    return (
        <div>
            <div className='flex justify-center  '>
                <hr className='border-gray-700 w-11/12' />
            </div>
            <div className="mt-8">
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jacket & Coats
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Suits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jeans
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Swimwear
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Polo shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Tracksuits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
            </div>
        </div>
    )
}

function Women() {
    return (
        <div>
            <div className='flex justify-center  '>
                <hr className='border-gray-700 w-11/12' />
            </div>
            <div className="mt-8">
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jacket & Coats
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Suits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jeans
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Swimwear
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Polo shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Tracksuits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
            </div>
        </div>
    )
}

function Others() {
    return (
        <div>
            <div className='flex justify-center  '>
                <hr className='border-gray-700 w-11/12' />
            </div>
            <div className="mt-8">
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jacket & Coats
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Suits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Jeans
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Swimwear
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Polo shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Tracksuits
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    Shirts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
                <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    shorts
                </Link>
            </div>
        </div>
    )
}

const MobileNavbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [isMen, setIsMen] = useState(false);
    const [isWomen, setIsWomen] = useState(false);
    const [isOthers, setIsOthers] = useState(false);
    const [isMenuMen, setIsMenuMen] = useState(false);
    const [isMenuWomen, setIsMenuWomen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);


    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const shopOpened = () => {
        setIsShop(!isShop);
    };

    const shopMen = () => {
        setIsMen(!isMen);
    };

    const shopWomen = () => {
        setIsWomen(!isWomen);
    };

    const shopOthers = () => {
        setIsOthers(!isOthers);
    };

    const menuMen = () => {
        setIsMenuMen(!isMenuMen);
    };

    const menuWomen = () => {
        setIsMenuWomen(!isMenuWomen);
    };





    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const [activeCurrency, setActiveCurrency] = useState('USD');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleCurrencyChange = (currency) => {
        setActiveCurrency(currency);
        setDropdownVisible(false);
    };

    const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

    {/*NAVIGATIONNN*/ }

    const navigate = useNavigate();
    const gotoAccounts = () => {
        navigate("/Accounts");
    };

    const gotoVeiwcart = () => {
        navigate("/viewcart");
    };

    const gotoHome = () => {
        navigate("/");
    };

    const gotoLiked = () => {
        navigate("/Liked");
    };

    const gotoCheckout = () => {
        navigate("/checkout");
    };

    {/*MAPPING*/ }


    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

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
        <nav className="fixed bottom-0 left-0 right-0  bg-white z-50">
            <div className="flex justify-between items-center py-3 px-4 z-50">
                <button
                    className="focus:outline-none text-gray-600"
                    onClick={toggleExpanded}
                >
                    <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} size="lg" />
                </button>
                <div
                    onClick={() => gotoHome()}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                </div>
                <div
                    onClick={() => gotoAccounts()}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                </div>
                <div
                    onClick={() => gotoLiked()}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                    <FontAwesomeIcon icon={faHeart} className="mr-2" onClick={() => gotoLiked()} />
                </div>
                <a
                    onClick={() => setShowNavbar(!showNavbar)}
                    className="Cart flex hover:text-red-800 text-2xl cursor-pointer"
                >
                    <AiOutlineShoppingCart />
                    <p className="absolute text-xs bg-black text-white rounded-full w-5 text-center h-5 mx-5 -my-2 py-0.5">
                        {totalCards}
                    </p>
                </a>
            </div>


            <div className="Cart">
                <div
                    className={`fixed top-0 bottom-0 right-0 z-30 h-[660px] w-3/4 bg-white overflow-y-auto transition duration-500 ease-in-out ${showNavbar ? '-translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="">
                        <div className="relative z-40 scroll-m-4 w-full h-screen shadow-md bg-white px-1 py-5">
                            <ul className="">
                                <li className="flex flex-row space-x-28">
                                    <a className="flex text-sm py-4 px-9 h-12 font-bold overflow-hidden whitespace-nowrap transition duration-300 ease-in-out">
                                        SHOPPING CART
                                    </a>
                                    <a
                                        onClick={() => setShowNavbar(!showNavbar)}
                                        className="flex items-center text-xs text-gray-500 hover:text-red-600 cursor-pointer"
                                    >
                                        close
                                        <AiOutlineRight />
                                    </a>
                                </li>
                                <hr className="mx-7 my-2" />

                                {state.length > 0 ? <div className="flex flex-col w-full ">


                                    <div className="border w-full h-96 overflow-y-auto">
                                        {/* rock */}
                                        {state.map((item) => (
                                            <div
                                                key={item.key}
                                                className="flex w-64 h-28 border-gray-200 border-b-2 "
                                            >
                                                <img
                                                    className="w-24 h-24 cursor-pointer"
                                                    src={item.image}
                                                />
                                                <div className="ml-2 mt-2">
                                                    <p className="text-sm text-gray-600 hover:text-red-600 duration-500 cursor-pointer">
                                                        {item.name}
                                                    </p>
                                                    <span className="text-sm text-gray-400">
                                                        {item.qty} X{" "}
                                                    </span>
                                                    <span className="pl-2 text-sm text-gray-600">
                                                        ${item.price}
                                                    </span>

                                                </div>
                                                <button className=" absolute right-10 hover:text-red-600" onClick={() => removeCard(item.id)}   >X</button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex mt-5 h-10 space-x-28 border-gray-200 border-b-2">
                                        <p className="text-sm text-gray-400">Subtotal</p>
                                        <p className="font-semibold">${Math.round(total)}</p>
                                    </div>
                                    <div className="flex justify-center border-red-400 border-b-2 mt-4">
                                        <p className="font-semibold hover:text-red-700 cursor-pointer duration-500 text-2xl" onClick={() => gotoVeiwcart()}>
                                            View Cart
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <button className="bg-slate-900 text-white font-bold w-full h-10" onClick={() => gotoCheckout()} >
                                            Checkout
                                        </button>
                                    </div>
                                </div> : <p className="flex justify-center text-gray-500 text-xs mt-6">
                                    Your cart is currently empty
                                </p>}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[610px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <h2 className='w-full flex justify-center'>Menu</h2>
                </div>
                <div className="mt-8">
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Shop
                        </Link>
                        <button className='absolute right-0 mt-2 text-2xl'
                            onClick={shopOpened}
                        >
                            <AiOutlineRight onClick={shopOpened} />
                        </button>
                    </div>
                    <Link
                        to="/categories"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Categories
                    </Link>
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Men
                        </Link>
                        <div className='absolute right-0 mt-2 text-2xl'>
                            <AiOutlineRight onClick={menuMen} />
                        </div>
                    </div>
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Women
                        </Link>
                        <div className='absolute right-0 mt-2 text-2xl'>
                            <AiOutlineRight onClick={menuWomen} />
                        </div>
                    </div>
                    <Link
                        to="/categories"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Pages
                    </Link>
                    <Link
                        to="/categories"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/categories"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Contact
                    </Link>
                    <div className='flex justify-center mt-6 '>
                        <hr className='border-gray-200 w-11/12' />
                    </div>
                    <div className="relative w-11/12 mx-auto mt-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="w-full rounded-full py-3 pl-8 pr-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                        />
                    </div>
                    <div className='flex justify-center mt-6 '>
                        <hr className='border-gray-200 w-11/12' />
                    </div>
                    <div className="relative w-20 mt-6 ml-2">
                        <button
                            onClick={toggleDropdown}
                            className="bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full flex items-center justify-between w-full focus:outline-none focus:shadow-outline"
                        >
                            <span className="mr-2">{activeCurrency}</span>
                            <FaAngleDown />
                        </button>
                        {dropdownVisible && (
                            <ul className="absolute bg-white text-black w-full mt-1 rounded-lg shadow-lg z-10">
                                {currencies.map((currency) => (
                                    <li
                                        key={currency}
                                        onClick={() => handleCurrencyChange(currency)}
                                        className={`px-3 py-2 cursor-pointer ${activeCurrency === currency
                                            ? 'bg-gray-300 font-bold'
                                            : 'hover:bg-gray-300'
                                            }`}
                                    >
                                        {currency}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/*MENN OPTION IN THE MENUUUU*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isMenuMen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={menuMen} />
                    <h2 className='w-full flex justify-center'>Men</h2>
                </div>
                <div className='flex'>
                    <Link
                        to="/dsdsdsdsd"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Men
                    </Link>
                    <button className='absolute right-0 mt-2 text-2xl'
                        onClick={shopMen}
                    >
                        <AiOutlineRight onClick={shopMen} />
                    </button>
                </div>
            </div>

            {/*WOMENN OPTION IN THE MENUUUU*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isMenuWomen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={menuWomen} />
                    <h2 className='w-full flex justify-center'>Women</h2>
                </div>
                <div className='flex'>
                    <Link
                        to="/dsdsdsdsd"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Women
                    </Link>
                    <button className='absolute right-0 mt-2 text-2xl'
                        onClick={shopWomen}
                    >
                        <AiOutlineRight onClick={shopWomen} />
                    </button>
                </div>
            </div>

            {/*SHOPPPP OPTIONSSSSS*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isShop ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={shopOpened} />
                    <h2 className='w-full flex justify-center'>Shop</h2>


                </div>
                <div className='flex justify-center  '>
                    <hr className='border-gray-700 w-11/12' />
                </div>
                <div className="mt-8">
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Men
                        </Link>
                        <button className='absolute right-0 mt-2 text-2xl'
                            onClick={shopMen}
                        >
                            <AiOutlineRight onClick={shopMen} />
                        </button>
                    </div>
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Women
                        </Link>
                        <button className='absolute right-0 mt-2 text-2xl'
                            onClick={shopWomen}
                        >
                            <AiOutlineRight onClick={shopWomen} />
                        </button>
                    </div>
                    <div className='flex'>
                        <Link
                            to="/categories"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            Others
                        </Link>
                        <button className='absolute right-0 mt-2 text-2xl'
                            onClick={shopOthers}
                        >
                            <AiOutlineRight onClick={shopOthers} />
                        </button>
                    </div>
                </div>
            </div>

            {/*Men OPTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isMen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={shopMen} />
                    <h2 className='w-full flex justify-center'>Men</h2>
                </div>
                <Men />
            </div>

            {/*Women OPTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isWomen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={shopWomen} />
                    <h2 className='w-full flex justify-center'>Men</h2>
                </div>
                <Women />
            </div>


            {/*Others OPTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*/}

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 h-[720px] w-full bg-white overflow-y-auto transition duration-500 ease-in-out ${isOthers ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex  py-3 mt-12">
                    <AiOutlineLeft className='ml-2 text-xl' onClick={shopOthers} />
                    <h2 className='w-full flex justify-center'>Men</h2>
                </div>
                <Others />
            </div>


        </nav>
    );
};

export default MobileNavbar;
