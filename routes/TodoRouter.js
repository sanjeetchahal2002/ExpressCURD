const todoController =  require('../controllers/todoConroller.js')
const validate = require('../Middlewares/validationMiddleWare.js');

const router = require('express').Router()

router.get('/',todoController.getAllTodos)
router.get('/:id',todoController.getTodoByid)
router.post('/',validate,todoController.addtodo)
router.put('/:id',validate,todoController.updateTodoId)
router.delete('/:id',todoController.deleteTodoId)


module.exports = router