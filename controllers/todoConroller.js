const db = require('../models');

const Todo = db.todos;
const getAllTodos = async (req,res) => {
    let todos = await Todo.findAll({})
    res.status(200).send(todos)
}

const getTodoByid = async (req,res) => {
    let id = req.params.id
    let todo = await Todo.findOne({where: {id : id}})
    res.status(200).send(todo)
}
const addtodo = async (req,res) => {
    let info = {
        text : req.body.text,
        isCompleted: req.body.isCompleted
    }
    const todo = await Todo.create(info)
    res.status(200).send(info)
}


const updateTodoId = async (req,res) => {
    let id  = req.params.id
    const todo = await Todo.update(req.body,{where: {id : id}})
    res.status(200).send(todo)
}

const deleteTodoId = async (req,res) => {
    let id  = req.params.id
    await Todo.destroy({where: {id : id}})
    res.status(200).send('Todo is deleted')
}

module.exports = {
    getAllTodos,
    getTodoByid,
    addtodo,
    updateTodoId,
    deleteTodoId
}








