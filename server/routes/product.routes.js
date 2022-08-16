const UserController = require('../controllers/product.controller');

module.exports = function (app) {
    app.post('/api/product/new', UserController.createProduct);
    app.get('/api/products', UserController.getAllProduct);
    app.get('/api/product/:id', UserController.getProduct);
    app.put('/api/product/:id/', UserController.updateProduct);
    app.delete('/api/product/:id', UserController.deleteProduct);

}