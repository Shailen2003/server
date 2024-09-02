const express =require("express")
const Razorpay = require('razorpay');
const cors = require("cors")
const app=express()

const razorpay = new Razorpay({
    key_id: 'rzp_live_ZiCuMFt0hTLAej',
    key_secret: 'u2CJMnAQnfGdMRZpwpazk5Yo',
  });

app.listen(8089)

app.use(cors())
app.get('/order',async(req,res)=>{
    const data= await razorpay.orders.create({
        "amount": (1200*100),
        "currency": "INR",
        "receipt": "RCP_ID_"+Date.now() 
      })
      res.json({
        amount : data.amount,
        oderId : data.id
      })
})