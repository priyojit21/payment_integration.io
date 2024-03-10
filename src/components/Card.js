// import React from 'react'

// export default function Card({image,price,title,onCheckout}) {
//   return (
//     <>
//         <div className="p-4 md:w-1/3">
//                             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                                 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
//                                 <div className="p-6">
//                                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//                                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
//                                     <h2 className="leading-relaxed mb-3">{price}</h2>
//                                     <button onClick={()=> onCheckout({name:title,amount:price})}>Pay Now</button>
//                                 </div>
//                             </div>
//                         </div>
//     </>
//   )
// }

import { React } from "react";

function Card({id, planName,price,details,button,onCheckout}){
    return(
        <div className="cardb02">
            <div className="plan-infob02">
                <div className="plan-detailsb02">
                    <h4 className="plan-nameb02">{planName}</h4>
                    <h4 className="plan-Priceb02">₹{price}</h4>
                </div>

                <div className="descriptionb02">
                    <p>{details}</p>
                </div>
            </div>

        
            <button className="btnb02" onClick={()=> onCheckout({name:planName,amount:price})}>
               {button}
            </button>
        </div>
    )
}
export default Card
