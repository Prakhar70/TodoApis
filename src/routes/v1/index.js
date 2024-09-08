const express = require('express');
const { categoryController } = require('../../controllers/category.controller');
const { productController } = require('../../controllers/product.controller');

const v1Router = express.Router();


v1Router.get('/products/:id', productController);
v1Router.get('/categories/:id', categoryController);

module.exports = v1Router;