function errorLoggers(err,req,res,next){
    console.log(`Error:${err.message}`)
    next(err)
}
function errorResponder(err,req,res,next){
    res.header('Content-Type','application/json')
    const status = err.status||404
    res.status(status).send(err.message)
}


function invalidPathHandler(req,res,next){
    res.status(404).send('Invalid Path')
}

module.exports={
    errorLoggers,
    errorResponder,
    invalidPathHandler
}