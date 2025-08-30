const express=require("express")
const userRouter=express.Router()

const {userData, getUserdata} = require("../middleware/userControllers")
userRouter.post("/userData",userData)
userRouter.get("/getUser",getUserdata)

module.exports=userRouter