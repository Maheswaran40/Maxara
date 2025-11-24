const registerdata_model = require("../model/userregisterModal");
const customerdata_model = require("../model/customerdetailsModal")

const userData = async (req, res) => {
    try {
        const data = registerdata_model({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        await data.save()
        res.status(200).send("user details added")

    }
    catch (err) {
        if (err.code === 11000) {
            // Duplicate key error
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(404).send(`user data adding error ${err}`)
    }
}

const getUserdata = async (req, res) => {
    try {
        const userdata = await registerdata_model.find()
        const cart = await customerdata_model.find()
        res.status(200).send({userdata, cart})
    }
    catch (err) {
        res.status(404).send(`user data getmethod error ${err}`)

    }
}

// cart post
const addCart = async (req, res) => {
    console.log('req.body', req.params, req.body)
    const { id } = req.params;
    try {
        
        const cartData = customerdata_model({
            email: id,
            cart: req.body.cart.map(data => ({
                filename: data.filename,
                url: data.url,
                name: data.name,          // product name
                price: data.price,
                qty: data.quantity,
            }))
        })
        await cartData.save()
        res.status(200).send("user details added")
    }
    catch (err) {
        res.status(404).send(`user data getmethod error ${err}`)

    }
}
//  Delete product by ID
const deleteData = async (req, res) => {
  try {
    await customerdata_model.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted successfully " });
  } catch (err) {
    res.status(404).send(`Error name: ${err.name}, message: ${err.message}`);
  }
};
module.exports = { userData, getUserdata, addCart } 