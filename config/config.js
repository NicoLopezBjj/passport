const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
    new GoogleStrategy({
        // opciones de estrategias de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'auth/google/redirect',
    },()=>{
        // funcion callback de passport

    })
)