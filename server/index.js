const express = require("express")
const app = express()
const cors = require("cors")
const {OrderModel} = require("./Order.models")
const morgan = require("morgan")
const crypto = require("crypto");
const connectDB = require("./db.config")
connectDB()
//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// from 18s (codewithkrishna razorpayint 45m)
const Razorpay = require("razorpay")
const razorpay = new Razorpay({
    key_id:'rzp_test_4vH2Yp0UzIbsOh',
    key_secret:'RGl3byRXYcSfSUn8luGPmZwa',
});

//routes
app.post("/payment/checkout",async(req,res) => {
    const {name,amount} = req.body

    const order = await razorpay.orders.create({
        amount: Number(amount*100),
        currency:"INR"
    })

    await OrderModel.create({
        order_id:order.id,
        name:name,
        amount:amount
    })

    console.log({order});
    res.json({order});
})

app.post("/payment/payment-verification",async(req,res) => {
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body

    const body_data = razorpay_order_id+" "+razorpay_payment_id

    const expect = crypto.createHmac('sha256','RGl3byRXYcSfSUn8luGPmZwa',)
    .update(body_data).digest("hex")
   
    const isValid = expect === razorpay_signature;
    if(isValid){
        
        await OrderModel.findOne({order_id:razorpay_order_id},{
            $set:{
                razorpay_payment_id,razorpay_order_id,razorpay_signature
            }
        })
        res.redirect(`http://localhost:3000/success?payment_id=${razorpay_payment_id}`)
        return 
    }
    else{
        // res.redirect("http://localhost:3000/failure")
        res.redirect(`http://localhost:3000/success?payment_id=${razorpay_payment_id}`)
        return 
    }
   
})

app.listen(5000,()=>{
    console.log("App listened at 5000");
})