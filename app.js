const express = require ('express')
const rutasAuth=require('./routes/routesAuth')
const passportSetUp=require('./config/config')
const keys= require('./config/keys')
const mongoose=require('mongoose')


const app = express()

app.set('view engine','ejs')

mongoose.connect(keys.mongodb.dbURL,()=>{
    console.log('se conecto a mongo')
})

app.use('/auth',rutasAuth)

app.get('/',(req,res)=>{
    res.render('home')
})


app.listen(3700,()=>{
    console.log('servidor ejecutandose')
})


