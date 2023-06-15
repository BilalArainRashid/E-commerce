import React from 'react'
import { BsTruck, BsBoxSeam, BsWallet2 } from 'react-icons/bs'
import { RiSecurePaymentLine } from "react-icons/ri"

const ItemAvailable = () => {
    return (
        <div class="text-gray-600   body-font w-full flex justify-center mt-12 ">
            <div class="container mt-12 mx-auto flex flex-row">
                <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div class="w-[650px] sm:p-4 px-4 ml-20 mb-44">
                        <h1 class="title-font text-5xl mb-2 font-semibold text-gray-900">Tailored clothes available as in chain stores.</h1>
                        <div class="leading-relaxed text-xl mt-6">These settings don’t provide big changes but only some small css</div>
                        <div class="leading-relaxed text-xl mt-3">changes in spaces or borders for example.</div>
                        <div class="leading-relaxed text-md mt-5">Because we have many types of elements we created Live Editor for you so you can see live changes.</div>

                        <div className='flex flex-col mt-6'>
                        <div className='flex flex-row space-x-60'>
                            <div className='flex space-x-1 text-sm' >
                                <BsTruck />
                                <p>Free delivery</p>
                            </div>
                            <div className='flex space-x-1 text-sm' >
                            <BsBoxSeam />
                            <p>Non-contact shipping</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-44 mt-5'>
                            <div className='flex space-x-1 text-sm'>
                                <BsWallet2 />
                                <p>Money-back quarantee</p>
                            </div>
                            <div className='flex space-x-1 text-sm' >
                                <RiSecurePaymentLine />
                                <p >Secure payments</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
            </div>
            <div class=" w-[700px] sm:mt-0">
                <img class="object-cover object-center w-full h-full" src="https://cdn.shopify.com/s/files/1/0020/7483/7110/files/desc-img.png?v=1626516285" alt="stats" />
            </div>
        </div>
        </div >
    )
}

export default ItemAvailable