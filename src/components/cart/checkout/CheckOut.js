import React from 'react'
// import Paypal from '../paypalcontent/Paypal'
import Check from './Check'
import DiscountCode from './DiscountCode'


function CheckOut() {
 

  return (
    <> 
    <div className="flex h-full w-full">
        <div className='w-2/3'><Check/></div>
        <div className='w-2/4 border-l-2 border-stone-200  bg-stone-100'><DiscountCode/></div>
    </div>
   
    
    
    </>
  )
}

export default CheckOut
{/* <div className=' absolute top-0 w-full'>
<Paypal/>
 
</div> */}