const express = require('express');
const { categoryController } = require('../../controllers/category.controller');
const { productController } = require('../../controllers/product.controller');

const v2Router = express.Router();

v2Router.use('/products/:id', productController);
v2Router.use('/categories/:id', categoryController);

module.exports = v2Router;