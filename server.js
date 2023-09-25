require('dotenv')
const express = require('express')
const app = express()

const errorHandler = require('./Middlewares/errorHandler.js')
const router = require('./routes/TodoRouter.js')

app.use(express.json())
app.use('/todos',router)
app.use(errorHandler.errorLoggers)
app.use(errorHandler.errorResponder)
app.use(errorHandler.invalidPathHandler)

app.get('/',(req,res)=>{
    res.json({message:'This is Todo List'})
})
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

