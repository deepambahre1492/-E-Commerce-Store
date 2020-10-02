const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    productName: String,
    quantity: Number,
    price: Number,
    productColor: String,
    productImage:String,
    user:{type:String,indexed:true},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
     }]
})


module.exports = mongoose.model("ShoppingItem",ProductSchema);