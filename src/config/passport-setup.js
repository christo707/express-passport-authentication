import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './keys';

passport.use(
  new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}), () => {
  //callback function
})
