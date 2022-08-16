// const { response } = require('express');
// const { request } = require('http');
const Product = require('../models/product.model');

module.exports.createUser = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title, price, description
    })
        .then(product => response.json({ insertedProduct: product, msg: 'Succesful creation' }))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProduct = (_, response) => {
    Product.find({})
        .then(retriviedproducts => response.json(retriviedproducts))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(productDeleted => response.json(productDeleted))
        .catch(err => response.json(err))
}