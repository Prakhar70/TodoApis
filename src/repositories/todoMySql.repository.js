const todos = [];

class TodoMySQLRepository{
    insert (todoText){
        //will not work
        mysql.exec (`INSERT INTO TODOS (todoText) VALUES (${todoText});`)
    }
    getAll(){
        mysql.exec (`SELECT * FROM TODOS;`);
    }
    get(id){
        mysql.exec(`SELECT * FROM TODOS WHERE id = ${id};`);
    }
}

module.exports = TodoMySQLRepository