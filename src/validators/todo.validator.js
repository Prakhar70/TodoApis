function createTodoValidator (req, res, next){
    if(!req.body.todoText){
        return res.json({msg: 'Invalid request'})
    }

    // If you are sending everything required
    next();
}

module.exports={
    createTodoValidator
}