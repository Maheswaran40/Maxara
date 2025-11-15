const mongoose = require("mongoose")
const customerData = mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    cart: [{
        filename: { type: String },
        url: {type: String},
        name: {type: String},          // product name
        price: {type: Number},
        qty: { type: Number },
    }],
    wishlist: {
        // required:true,
        type: Array
    }
})

const customerdata_model = mongoose.model("cartData", customerData)
module.exports = customerdata_model