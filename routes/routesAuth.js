const router = require ('express').Router()
const passport=require('passport')

router.get('/login', (req,res)=>{
    res.render('login', { user: req.user })
})

router.get('/login'), (req,res)=>{
    res.send('se deslogueo')
}

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('llegaste a la URL de redireccion')
})

module.exports= router