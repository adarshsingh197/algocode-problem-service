const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config')

const app = express();
const apirouter=require('./routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

app.use('/api',apirouter)

app.get('/ping',(req,res)=>{
    return res.json({message:'Problem service is avaliable'})
})

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})