require('dotenv').config();

const express = require("express");
const Razorpay = require('razorpay');
const cors = require("cors");
const app = express();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(cors());

app.get('/order', async (req, res) => {
    try {
        const data = await razorpay.orders.create({
            amount: 1200 * 100,
            currency: "INR",
            receipt: "RCP_ID_" + Date.now()
        });
        res.json({
            amount: data.amount,
            orderId: data.id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(8089, () => {
    console.log('Server is running on port 8089');
});
