const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Title is mandatory'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), message: "Invalid email"
        }
    },
    price: {
        type: String,
        required: [true, "price is required"]
    },
    description: {
        type: String,
        required: [true, "Descripcion is required"]
    }

});

const Product = mongoose.model('Product', ProductScheme);
module.exports = Product;