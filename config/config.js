const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
    new GoogleStrategy({
        // opciones de estrategias de google
    },()=>{
        // funcion callback de passport

    })
)