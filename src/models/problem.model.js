const mongoose = require("mongoose")

const ProblemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title Cannot be Empty"]
    },
    description:{
        type:String,
        required:[true,'Description Cannot Be Empty']
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty Cannot be Empty'],
        default:'easy'
    },
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            Output:{
                type:String,
                required:true
            },
        }
    ],
    editorial:{
        type:String
    }


})

const Problem = mongoose.model('Problem',ProblemSchema)

module.exports= Problem