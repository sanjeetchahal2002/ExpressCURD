const db = require('../models');

const Todo = db.todos;
const getAllTodos = async (req,res) => {
    let todos = await Todo.findAll({})
    res.status(200).send(todos)
}

const getTodoByid = async (req,res,next) => {
    let id = req.params.id
    try{
        if(id != NaN){
        let todo = await Todo.findOne({where: {id : id}})
        if(todo){
            res.status(200).send(todo)
        }else{
            throw new Error('Todo Not Exist')
        }
    }else{
        throw new Error('Id is not a Number')
    }
    }catch(error){
        next(error)
    }
}

const addtodo = async (req,res) => {
    let info = {
        text : req.body.text,
        isCompleted: req.body.isCompleted
    }
    const todo = await Todo.create(info)
    res.status(200).send(info)
}

const updateTodoId = async (req,res,next) => {
    let id  = req.params.id
    try{
        if(id != NaN){
            const todo = await Todo.update(req.body,{where: {id : id}})
            if(todo){
                res.status(200).send(todo)
            }else{
                throw new Error ('Todo Not Exist')
            }
        }else{
            throw new Error ('Id is not a Number')
        }
    }catch(error){
        next(error)
    }
}

const deleteTodoId = async (req,res,next) => {
    let id  = req.params.id
    try{
        const item = await Todo.findOne({where:{id:id}})
        if(item){
            await Todo.destroy({where: {id : id}})
            res.status(200).send('Todo is deleted')
        }else{
            throw new Error('Id does not exist!')
        }
    }catch(error){
        next(error)
    }
}

module.exports = {
    getAllTodos,
    getTodoByid,
    addtodo,
    updateTodoId,
    deleteTodoId
}







