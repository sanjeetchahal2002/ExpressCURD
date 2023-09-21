const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin:'http://localhost:8081'
}



app.use(cors(corOptions))


app.use(express.json())

app.use(express.urlencoded({extended : true}))

const router = require('./routes/TodoRouter.js')
app.use('',router)

app.get('/',(req,res)=>{
    res.json({message:'This is Todo List'})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

