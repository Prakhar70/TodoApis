const TodoService = require("../services/todo.service");
const TodoRepository = require("../repositories/todo.repository");
//const TodoMySqlRepository = require('../repositories/todoMySql.repository')
//Service layer will be independent of Repository used.

const todoService= new TodoService(new TodoRepository());
//const todoService= new TodoService(new TodoMySqlRepository());

function getTodos(req, res){
    const response = todoService.getAllTodos();
    return res.json({
        data:response
    })
}

function createTodos(req, res){
    
    const todoText = req.body.todoText;
    todoService.create(todoText);

    return res.json({
        data:'New todo created'
    })
}
module.exports = {
    getTodos,
    createTodos
}