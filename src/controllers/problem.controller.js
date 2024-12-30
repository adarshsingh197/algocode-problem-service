const {StatusCodes}=require('http-status-codes')
const NotImplemented = require('../errors/NotImplemented.error')


function addProblem(){
    try{
      throw new NotImplemented('addProblem')
    }
    catch(error){
        next(error);

    }
}

function getProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    })
}

function deleteProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    })
}

function updateProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    })
}
function pingController(req,res){
    return res.json({
        message:"Ping Controller"
    })
}

module.exports={
    addProblem,
    getProblem,
    deleteProblem,
    updateProblem,
    pingController
}