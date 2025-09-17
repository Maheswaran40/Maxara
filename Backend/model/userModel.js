// const mongoose=require("mongoose")
// const dataSchema=mongoose.Schema({
    
//     img:{
//         type:String,
//         required:true
//     },
//      name:{
//         type:String,
//         required:true
//     },
//      price:{
//         type:Number,
//         required:true
//     },
//      category:{
//         type:String,
//         required:true
//     },
//      desc:{
//         type:String,
//         required:true
//     }
// })

// const dataModel=mongoose.model("product_details", dataSchema)
// module.exports=dataModel

// models/images.js
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: { type: String, unique: true }, // 👈 unique index
  url: String,
  folder: String,
  name: String,          // product name
  price: Number,
  category: String,
  desc: String   ,
  offer: String,     // add this
  dashprice: Number        // product description
});

const dataModel = mongoose.model("images", imageSchema); // <- collection name 'images'
module.exports = dataModel;
