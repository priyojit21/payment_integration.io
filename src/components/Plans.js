import React from 'react' 
import Card from "./Card.js"
import Listing from "./Listing.js"
import axios from 'axios'
function Plans({plans}) {

    const CheckoutHandler = async ({ name, amount }) => {
        const { data: { order } } = await axios.post("http://localhost:5000/payment/checkout", {
            name, amount
        })

        var options = {
            "key": "rzp_test_4vH2Yp0UzIbsOh",
            "amount": order.amount,
            "currency": order.currency,
            "name": "Udyog Sarthi",
            "description": "Test Transaction",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
            "order_id": order.id,
            "callback_url": "http://localhost:5000/payment/payment-verification",
            "prefill": {
                "name": "Guarav",
                "email": "abc@gmail.com",
                "contact": "7737973298"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }

        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();

        console.log({ order });
    }



    const pay1= plans.find((plan)=> plan.id===1);
    const pay2= plans.find((plan)=> plan.id===2);
    const pay3= plans.find((plan)=> plan.id===3);
    return(
        <div className='containerb02'>
            <div className="headingsb02">
                <h1 className="title1b02">Pay only for </h1>
                <h1 className="title2b02">what you need</h1>
                <h3 className='desb02'>Join dozens of high-growth startups.</h3>
            </div>
            <div className="Cardsb02">
                <div className='card1b02'>
                    <Card className="plan1b02" {...pay1}  onCheckout={CheckoutHandler}></Card>
                    <Listing  {...pay1}></Listing>

                </div>
                <div className='card2b02'>
                    <Card className="plan2b02" {...pay2}  onCheckout={CheckoutHandler}></Card>
                    <Listing {...pay2}></Listing>
                </div>
                <div className='card3b02'>
                    <Card className="plan3b02" {...pay3}  onCheckout={CheckoutHandler}></Card>
                    <Listing {...pay3}></Listing>
                </div>
                
            </div>
        </div>
    );   
}
export default Plans;