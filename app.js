const express = require ('express')
const rutasAuth=require('./routes/routesAuth')
const passportSetUp=require('./config/config')
const keys= require('./config/keys')
const mongoose=require('mongoose')


const app = express()

app.set('view engine','ejs')

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(keys.mongodb.dbURL);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

connectToMongoDB();


app.use('/auth',rutasAuth)

app.get('/',(req,res)=>{
    res.render('home')
})


app.listen(3700,()=>{
    console.log('servidor ejecutandose')
})


