const mongoose=require("mongoose")
const userData=mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique: true
    },
    password:{
        required:true,
        type:String
    }
})

const registerdata_model =mongoose.model("ussrData",userData)
module.exports=registerdata_model