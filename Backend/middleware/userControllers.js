const registerdata_model = require("../model/userregisterModal");

 const userData=async(req,res)=>{
try{
    const data=registerdata_model({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    await data.save()
    res.status(200).send("user details added")

}
catch(err){
     if (err.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(404).send(`user data adding error ${err}`)
}
}

const getUserdata=async(req,res)=>{
    try{
            const userdata = await registerdata_model.find()
        res.status(200).send(userdata)
    }
    catch(err){
    res.status(404).send(`user data getmethod error ${err}`)

    }
}
module.exports={userData,getUserdata}