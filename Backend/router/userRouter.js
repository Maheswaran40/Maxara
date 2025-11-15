const express=require("express")
const userRouter=express.Router()

const {userData, getUserdata, addCart} = require("../middleware/userControllers")
userRouter.post("/userData",userData)
userRouter.get("/getUser",getUserdata)
userRouter.put('/addCart/:id', addCart)
module.exports=userRouter