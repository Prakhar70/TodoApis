const express = require('express');
const { PORT } = require('./config/server.config')
const apiRouter = require('./routes')

const app = express ();

app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log(`Server listening to ${PORT}`);
})
/***
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v2/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/categories/:id
 */