const express = require('express');
const todoRouter = require('./todos.routes');

const router = express.Router();

router.use('/todos', todoRouter)


module.exports = router;