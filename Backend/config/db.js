const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log("database Is Connected"))
    .catch((err)=>(`database is not connected ${err}`))
}
module.exports=connectDb