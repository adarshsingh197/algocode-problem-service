function addProblem(){

}

function getProblem(){

}

function deleteProblem(){

}

function updateProblem(){

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