const connectDb = require("./config/db");//database connecting
connectDb()

const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors({
    // origin:"https://maxara-the-greatest-market-2755.onrender.com",
    origin: [
      "http://localhost:5173",
      "http://localhost:5174", // ✅ ADD THIS
      "https://maxara-greatest-market.netlify.app"
    ],
    methods:["POST","GET","PUT","DELETE"],
     credentials: true,
}
))

app.use(express.json({limit:"50mb"}))
app.get("/",(req,res)=>(
    res.send(`<h1>NOT FOUND</h1>`)
))
const dotenv=require("dotenv");
dotenv.config()

// product data router
const router = require("./router/dataRouter");
app.use(router)

// user data router
const userRouter = require("./router/userRouter");
app.use(userRouter)


app.listen(process.env.PORT,()=>console.log(`server is running in port ${process.env.PORT}`))
