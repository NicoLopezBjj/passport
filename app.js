const express = require ('express')
const rutasAuth=require('./routes/routesAuth')
const passportSetUp=require('./config/config')
const keys= require('./config/keys')
const mongoose=require('mongoose')
const cookieSession=require('cookie-session')


const app = express()

app.set('view engine','ejs')

app.use(cookieSession({
    maxAge:24*60*1000,
    keys:[keys.session.cookieKey]
}
))

app.use(passport.initializate())
app.use(passport.session())

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


