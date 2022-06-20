const mongoose =require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, " name cannot be empty"]

    },
    price: {
        type: Number,
        required: [true, " price cannot be empty"]

    },
    quantity: {
        type: Number,
        required: [true, " quantity cannot be empty"]

    },
    brand: {
        type: String,
        required: [false, " brand cannot be empty"]

    }

})
module.exports = mongoose.model('productModel',productSchema); 
