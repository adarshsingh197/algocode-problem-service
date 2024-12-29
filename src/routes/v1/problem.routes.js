const express= require('express')

const {ProblemController}= require('../../controllers')

const problemRouter= express.Router();

problemRouter.get('/:id',ProblemController.getProblem);
problemRouter.post('/',ProblemController.addProblem);
problemRouter.put('/',ProblemController.updateProblem);
problemRouter.delete('/:id',ProblemController.deleteProblem);
problemRouter.get('/ping',ProblemController.pingController);


module.exports=problemRouter