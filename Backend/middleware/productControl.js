// const dataModel = require("../model/userModel")

// const addData = async (req, res) => {
//     try {
//         const product_Data = dataModel({
//             img: req.body.image,
//             name: req.body.name,
//             price: req.body.price,
//             category: req.body.category,
//             desc: req.body.desc,
//             folder:req.body.folder,
//             filename:req.body.filename
//         }
//         )

//         await product_Data.save()
//         res.status(200).send("data is added")
//     }
//     catch (err) {
//         res.status(404).send(`error name:${err.name} , error Message:${err.message}`)
//     }
// }
// // get
// const getData = async (req, res) => {
//     try {
//         const getproduct = await dataModel.find()
//         res.status(200).send(getproduct)
//     }
//     catch (err) {
//         res.status(404).send(`error name:${err.name} , error Message:${err.message}`)
//     }
// }
// // update
// const updateData=async(req,res)=>{
//     try{
//         const updateProduct=await dataModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
//         res.status(200).send("Data Updated")
//     }
//     catch(err){
//         res.status(404).send(`error name:${err.name} , error Message:${err.message}`)
//     }
// }

// // delete
// const deleteData=async(req,res)=>{
// try{
//     await dataModel.findByIdAndDelete(req.params.id)
//     res.status(200).send({ message: "Deleted successfully" });
// }
// catch(err){
//         res.status(404).send(`error name:${err.name} , error Message:${err.message}`)

// }
// }

// module.exports = {
//     addData,
//     getData,
//     updateData,
//     deleteData,
// };



//new code *****************************************************************************************************

const dataModel = require("../model/userModel");

// ➕ Add product
const addData = async (req, res) => {
  try {
    const product_Data = new dataModel({
      folder: req.body.folder,
      filename: req.body.filename,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      desc: req.body.desc,
      url: req.body.url   // will contain base64 string     // optional if you save Cloudinary URL
    });

    await product_Data.save();
    res.status(200).send("Data added successfully ✅");
  } catch (err) {
    res.status(404).send(`Error name: ${err.name}, message: ${err.message}`);
  }
};

// 📥 Get all products
const getData = async (req, res) => {
  try {
    const getproduct = await dataModel.find();
    res.status(200).send(getproduct);
  } catch (err) {
    res.status(404).send(`Error name: ${err.name}, message: ${err.message}`);
  }
};

// ✏️ Update product by ID
const updateData = async (req, res) => {
  try {
    const updateProduct = await dataModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updateProduct);
  } catch (err) {
    res.status(404).send(`Error name: ${err.name}, message: ${err.message}`);
  }
};

// ❌ Delete product by ID
const deleteData = async (req, res) => {
  try {
    await dataModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted successfully ✅" });
  } catch (err) {
    res.status(404).send(`Error name: ${err.name}, message: ${err.message}`);
  }
};

module.exports = {
  addData,
  getData,
  updateData,
  deleteData,
};
