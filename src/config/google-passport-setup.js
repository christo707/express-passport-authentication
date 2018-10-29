import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './keys';

passport.use(
  new GoogleStrategy({
  callbackURL: '/api/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  console.log("Google Authentication completed");
  console.log(profile);
}))