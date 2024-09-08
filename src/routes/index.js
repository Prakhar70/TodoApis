const express = require('express');

const v1Router = require('./v1/v1routes');
const v2Router = require('./v2/v2routes');

const apiRouter = express.Router();
apiRouter.get('/', (req, res)=>{
    res.json({msg:"api"});
})
apiRouter.use('/v1', v1Router);
apiRouter.use('/v2', v2Router);

module.exports = apiRouter;