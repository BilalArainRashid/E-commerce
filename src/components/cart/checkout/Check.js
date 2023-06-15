import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import paypal from "../../cart/paypal.svg";
import Paypal from '../paypalcontent/Paypal'

function Check() {
  const navigate = useNavigate();
  const [paypalPage,setPaypalPage]=useState(false)
  const [email, setEmail] = useState("");
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [address, setAddress] = useState("");
  const [isEmptyAddress, setIsEmptyAddress] = useState(false);
  const [city, setCity] = useState("");
  const [isEmptyCity, setIsEmptyCity] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isEmptyLastName, setIsEmptyLastName] = useState(false);
  const [apartment, setApartment] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isEmptyFirstName, setIsEmptyFirstName] = useState(false);

  // ...................... validate then go to next page
  function handleContinue() {
    let isFormValid = true;

    // Validate email
    if (!email) {
      setIsEmptyEmail(true);
      setIsEmailValid(true);
      isFormValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setIsEmptyEmail(false);
        setIsEmailValid(false);
        isFormValid = false;
      } else {
        setIsEmptyEmail(false);
        setIsEmailValid(true);
      }
    }
    if (!firstName) {
      setIsEmptyFirstName(true);
      isFormValid = false;
    } else {
      setIsEmptyFirstName(false);
    }

    if (!lastName) {
      setIsEmptyLastName(true);
      isFormValid = false;
    } else {
      setIsEmptyLastName(false);
    }

    // Validate address
    if (!address) {
      setIsEmptyAddress(true);
      isFormValid = false;
    } else {
      setIsEmptyAddress(false);
    }

    // Validate city
    if (!city) {
      setIsEmptyCity(true);
      isFormValid = false;
    } else {
      setIsEmptyCity(false);
    }

    if (isFormValid) {
      // Do something else, like navigate to the next page
      navigate("/Shipping");
    }
  }
  // .................

  const openPay = () => {
    setPaypalPage(true)
    };
  

  const gotoViewcart = () => {
    navigate("/viewcart");
  };

  return (
    <>
      <div className="w-[78.5%] ml-28 mt-[50px]">
        <div className="flex flex-col  ">
          <div className=" w-full ">
            <h1 className="  pl-3 text-[28px] mt-1"> Fastor Boxed</h1>

            <nav className=" pl-3 flex space-x-2 mt-3">
              <a
                href="#cart"
                className="inline-block text-xs text-cyan-700 cursor-pointer"
                onClick={() => gotoViewcart()}
              >
                {" "}
                Cart{" "}
              </a>
              <div className="text-sm text-gray-500 ">
                <AiOutlineRight />
              </div>
              <a
                href="#information"
                className="inline-block mr-6 font-medium text-xs cursor-text"
              >
                Information{" "}
              </a>
              <div className="text-sm text-gray-500 ">
                <AiOutlineRight />
              </div>
              <a
                href="#shipping"
                className="inline-block mr-6 text-gray-400 text-xs cursor-text"
              >
                Shipping
              </a>
              <div className="text-sm text-gray-500 ">
                <AiOutlineRight />
              </div>
              <a
                href="#payment"
                className="inline-block text-xs text-gray-400 cursor-text"
              >
                Payment
              </a>
            </nav>
            <div className="mb-">
              <div className="  flex flex-row items-center mt-5  w-full">
                <hr className="border w-full mx-2" />
                <p className="flex flex-shrink-0 px-2  space-x-96 font-semibold text-sm leading-7 text-gray-900 dark:text-white">
                  Express checkout
                </p>
                <hr className="border w-full mx-2" />
              </div>
              <div className="  justify-center items-center flex flex-col mt-2 w-full">
                <button className="border rounded-md bg-amber-400 hover:bg-yellow-500 flex flex-row justify-center items-center space-x-2  w-[265px] h-11" 
                  onClick={()=>openPay()}         >
                  <div></div>
                  <div className="w-full">
                    <p className="pl-[85px] text-base leading-4">
                      <img
                        src={paypal}
                        alt=""
                        className="h-6"
                        
                      />
                    </p>
                  </div>
                </button>
              </div>
              <div className="flex flex-row w-full items-center mt-3">
                <hr className="border w-full mx-2  " />
                <p className="flex flex-shrink-0 px-2  space-x-80 font-semibold text-sm leading-7 text-gray-900 dark:text-white">
                  OR
                </p>
                <hr className="border w-full mx-2" />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="">
              <div className="relative mt-1 ">
                <div className="pl-3 text-lg top-0 left-0 ">
                  Contact information
                </div>
                <div className=" text-sm  mt-1 text-gray-600 absolute  top-0 right-4 ">
                  Already have an account?
                  <button className="  text-sky-800 hover:text-blue-500 cursor-pointer ">
                    Log in
                  </button>
                </div>
                <div className="relative p-3 ">
                  <input
                    type="text"
                    className=" block pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email or mobile phone number"
                  />
                  {email ? (
                    <label className="absolute top-0  mt-3  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                      Email or mobile phone number
                    </label>
                  ) : null}
                </div>
                {isEmptyEmail && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter an address.
                  </p>
                )}
                {!isEmptyEmail && !isEmailValid && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className=" pl-4 relative flex items-center">
                <input
                  type="checkbox"
                  className=" h-4 w-4 cursor-pointer"
                  id="myCheckbox"
                />
                <label for="myCheckbox" className="ml-2 text-sm cursor-pointer">
                  Email me with news and offers
                </label>
              </div>
            </div>
            <div className=" container bg-white w-full  mt-6">
              <h1 className="pl-4  relative p-2 text-lg"> Shipping address</h1>
              <div className="  ">
                <div className="text left ">
                  <div className="  pl-4 pr-3 relative -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <div className="relative inline-block w-full">
                        <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4  rounded-lg leading-tight focus:outline-none focus:border-gray-500">
                          '<option value="">Country/Region</option>
                          <option>England</option>
                          <option>Wales</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                          <option>Afghanistan</option>
                          <option> Islands</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Anguilla</option>
                          <option>Antigua Barbuda</option>
                          <option>rgentina</option>
                          <option>Armenia</option>
                          <option>Aruba</option>
                          <option>Ascension Island</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bermuda</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Bosnia</option>
                          <option>Herzegovina</option>
                          <option>Botswana</option>
                          <option>Brazil</option>
                          <option>British Indian Ocean Territory</option>
                          <option>British Virgin Islands</option>
                          <option>Brunei</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burundi</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Cape Verde</option>
                          <option>Caribbean Netherlands</option>
                          <option>Cayman Islands</option>
                          <option>Central African Republic</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Christmas Island</option>
                          <option>Cocos (Keeling) Islands</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>Congo - Brazzaville</option>
                          <option>Congo - Kinshasa</option>
                          <option>Cook Islands</option>
                          <option>Costa Rica</option>
                          <option>Côte dIvoire</option>
                          <option>Croatia</option>
                          <option>Curaçao</option>
                          <option>Cyprus</option>
                          <option>Czechia</option>
                          <option>Denmark</option>
                          <option>Djibouti</option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Eswatini</option>
                          <option>Ethiopia</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <FaCaretDown />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex  w-full">
                    <div className="pl-4 pr-2 w-[50%] ">
                      {/* relative */}
                      <div>
                        <input
                          type="text"
                          className=" block mt-3 w-full pl-2 h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First name (optional)"
                        />
                        {firstName ? (
                          <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                            First name (optional)
                          </label>
                        ) : null}
                      </div>
                      {isEmptyFirstName && (
                        <p className="text-red-500 text-sm mt-2">
                          Please enter your first Name.
                        </p>
                      )}
                    </div>

                    <div className=" w-[50%] pl-2 pr-3 ">
                      <div className=" relative">
                        <input
                          type="text"
                          className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="lastname"
                        />
                      </div>

                      {lastName ? (
                        <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                          lastname
                        </label>
                      ) : null}
                    </div>
                    {isEmptyLastName && (
                      <p className="text-red-500 text-sm mt-2">
                        Please enter your last name.
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex-col">
                    <div>
                      <div className="relative pl-4 pr-3 ">
                        <input
                          type="text"
                          className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Address"
                        />
                        {address ? (
                          <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                            Address
                          </label>
                        ) : null}
                      </div>
                      {isEmptyAddress && (
                        <p className="text-red-500 text-sm mt-2">
                          Please enter an address.
                        </p>
                      )}
                    </div>

                    <div className="relative pl-4 pr-3">
                      <input
                        type="text"
                        className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        placeholder="Apartment"
                      />
                      {apartment ? (
                        <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                          Apartment
                        </label>
                      ) : null}
                    </div>

                    <div className="flex w-full pl-4 mr-8">
                      <div className="w-[50%]">
                        <div>
                          <input
                            type="text"
                            className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="city"
                          />
                          {city ? (
                            <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                              city
                            </label>
                          ) : null}
                        </div>
                        {isEmptyCity && (
                          <p className="text-red-500 text-sm mt-2">
                            Please enter your city.
                          </p>
                        )}
                      </div>
                      <div className="w-[50%] pl-4 pr-3">
                        <input
                          type="text"
                          className=" block mt-3 pl-2 w-full h-12 placeholder-gray-600 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          value={postalcode}
                          onChange={(e) => setPostalcode(e.target.value)}
                          placeholder="lastname"
                        />
                        {postalcode ? (
                          <label className="absolute top-0  mt-6  ml-3 text-sm text-gray-800  font-thin transition-all duration-300 ease-in-out">
                            Postal Code
                          </label>
                        ) : null}
                      </div>
                    </div>

                    <div className=" relative mt-3 ml-4 flex items-center ">
                      <input
                        type="checkbox"
                        className=" h-4 w-4 form-checkbox cursor-pointer"
                        id="myCheckbox"
                      />
                      <label
                        for="myCheckbox"
                        className="ml-2 text-sm cursor-pointer"
                      >
                        Save this information for next time
                      </label>
                    </div>
                    <div className="flex w-full space-x-[320px] mt-4 pl-3">
                      <h1
                        className="   mb-3 top-0 left-0 flex text-left text-sm mt-5 text-blue-700 cursor-pointer"
                        onClick={() => gotoViewcart()}
                      >
                        <AiOutlineLeft className="mt-1 mr-2 " /> Return to cart{" "}
                      </h1>
                      <button
                        className=" text-white bg-blue-700 border-0 px-7 py-5 font-bold focus:outline-none duration-500 hover:bg-blue-900 rounded-md text-sm"
                        onClick={() => handleContinue(!handleContinue)}
                      >
                        Continue to shipping
                      </button>
                    </div>
                    <hr className=" border w-full mt-12 "></hr>
                    <div className="h-11 mt-3 pl-4">
                      <p className=" text-blue-600  cursor-pointer ">
                        {" "}
                        Subscription policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {paypalPage ? (<div className=' absolute z-40  w-full top-0' >
      <Paypal  Pstate={setPaypalPage} />
      </div> ):null}
      
    </>
  );
}

export default Check;
