import React from "react";
import {useNavigate} from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'
// import {paypalSvg} from '../paypalcontent/paypal-mark-color.svg'

function Paypal(props) {
  const navigate=useNavigate()
  const gotoCreatepaypal = () => {
    navigate("/createpaypal");
  };

  const closePay = () => {
    props.Pstate(false)
    };
  

// kkkkkkkkkkkkkkkkkkkkkkkk
  return (
    <>
    <div className=" relative z-0  text-white top-0 right-0 bottom-0 left-0 w-full h-[1100px]   bg-opacity-80 bg-black " >
      <section class="relative z-40 right-0 left-0 ">
        <div class="flex flex-col items-center justify-center px-6 py-0  md:h-screen lg:py-0">
          <div class="w-fullv  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center mt-5">
              <img
                class="w-10 h-10 mr-2"
                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                alt="logo"
              />
            </div>

            <div class="md:space-y-6 sm:p-8">
              <div className="text-content text-center">
                <h6 class="text-9xl text-gray-600 font-semibold md:text-2xl ">
                  Pay with PayPal
                </h6>
                <p class="  text-gray-700 font-semibold  dark:text-white mt-3">
                  Enter your email address to get started.
                </p>
              </div>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="0 border border-gray-300 py-5 text-gray-700 placeholder-gray-400 text-xl placeholder:font-medium  rounded-lg   block w-full p-2.5 "
                    placeholder="Email or mobile number"
                    required=""
                  />
                  <h1
                    for="email"
                    class="block mb-8 mt-2  text-1xl text-blue-500 font-bold  "
                  >
                    Forget email?
                  </h1>
                </div>

                <div class=" justify-center">
                  <button class="bg-blue-900 hover:bg-blue-800 text-white font-semi-bold py-3 w-full rounded-full">
                    <h1 className=" text-white text-xl text-center">Next</h1>
                  </button>
                </div>
                <div class="inline-flex items-center justify-center w-full ">
                  <hr class="w-96 h-px bg-gray-200 border-1 dark:bg-gray-700" />
                  <span class="absolute px-3 font-medium text-gray-700 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    or
                  </span>
                </div>
                <div class="flex  justify-center ">
                  <button class=" font-semi-bold border-2 border-blue-700  py-3 w-full rounded-full">
                    <h1 className="  text-xl font-semibold text-center text-blue-900"  onClick={() => gotoCreatepaypal()} >
                      Create an acount
                    </h1>
                  </button>
                </div>
                <div>
                  <p className=" text-center text-blue-600 underline cursor-pointer">
                    Cancel and return to RoarTheme
                  </p>
                  <ul className="flex justify-center text-gray-500 font-bold text-xs   ">
                    <li>English</li>
                    <li>China</li>
                    <li>Frane</li>
                  </ul>
                  </div>
                  
              </form>
            </div>
            <div className="paypal-info bg-slate-100 py-2">
              <div className="paypal-links">
                <ul className="flex justify-center font-semi-bold space-x-2">
                  <li className="hover:underline text-gray-600">Contact us</li>
                  <li className="hover:underline text-gray-600">Privacy</li>
                  <li className="hover:underline text-gray-600">Legal</li>
                  <li className="hover:underline text-gray-600">Policy</li>
                  <li className="hover:underline text-gray-600">Update</li>
                  <li className="hover:underline text-gray-600">world</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </section>
    
    </div>
    <button className=" absolute z-100 right-10 font-bold text-white top-5 " onClick={closePay}><RxCross1/></button>
    </>
  );
}

export default Paypal;
