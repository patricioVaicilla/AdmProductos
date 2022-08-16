const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, 'Username is mandatory']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), message: "Invalid email"
        }
    }

});

const Product=mongoose.model('Product',ProductScheme);
module.exports=Product;