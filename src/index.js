const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config')

const app = express();
const apirouter=require('./routes');
const errorHandler = require('./utils/erroHandler');
const connectToDB = require('./config/db.config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

app.use('/api',apirouter)

app.get('/ping',(req,res)=>{
    return res.json({message:'Problem service is avaliable'})
})

//last middleware 
app.use(errorHandler)
app.listen(PORT,async ()=>{
    console.log(`server started ${PORT}`);
    await connectToDB();
    console.log("sucessfully connected to DB");

})