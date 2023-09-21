const todoController =  require('../controllers/todoConroller.js')
const validate = require('../Middlewares/validationMiddleWare.js');

const router = require('express').Router()

router.get('/todos',todoController.getAllTodos)
router.get('/todos/:id',todoController.getTodoByid)
router.post('/todos',validate,todoController.addtodo)
router.put('/todos/:id',validate,todoController.updateTodoId)
router.delete('/todos/:id',todoController.deleteTodoId)


module.exports = router