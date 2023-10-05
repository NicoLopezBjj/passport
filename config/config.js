const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys=require('./keys')
const User=require('../models/user-model')

passport.use(
    new GoogleStrategy({
        // opciones de estrategias de google
        // credenciales de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'/auth/google/redirect',
    },(accesToken,refreshToken,profile,done)=>{
        // funcion callback de passport
        console.log('datos del usuario')
        console.log(profile)
        new User({
            googleId:profile.id,
            username:profile.displayName
        })
        .save()
        .then((valor)=>{
            console.log('el usuario se creo con exito',valor)
        })
    })
)