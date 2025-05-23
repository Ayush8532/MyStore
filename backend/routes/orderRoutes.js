import express from 'express'
import { placeOrder,placeOrderStripe,placeOrderRazorPay,allOrders,userOrders,updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from "../middleware/adminAuth.js";
import authUser from '../middleware/auth.js'


const orderRouter=express.Router();

//Admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorPay);


//User Features

orderRouter.post('/userorders',authUser,userOrders)

//verify payment

orderRouter.post('/verifyStripe',authUser,verifyStripe);

export default orderRouter
