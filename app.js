const express = require ('express')
const rutasAuth=require('./routes/routesAuth')
const passportSetUp=require('./config/config')

const app = express()

app.set('view engine','ejs')

app.use('/auth',rutasAuth)

app.get('/',(req,res)=>{
    res.render('home')
})


app.listen(3700,()=>{
    console.log('servidor ejecutandose')
})


