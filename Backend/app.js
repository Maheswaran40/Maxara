const connectDb = require("./config/db");//database connecting
connectDb()

const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors(
  origin:"https://maxara-the-greatest-market-2755.onrender.com",
    methods:["POST","GET","PUT","DELETE"]
))

app.use(express.json({limit:"50mb"}))

const dotenv=require("dotenv");
dotenv.config()

// product data router
const router = require("./router/dataRouter");
app.use(router)

// user data router
const userRouter = require("./router/userRouter");
app.use(userRouter)


app.listen(process.env.PORT,()=>console.log(`server is running in port ${process.env.PORT}`))
