import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './keys';
import Account from '../model/account';

passport.use(
  new GoogleStrategy({
  callbackURL: '/api/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  console.log("Google Authentication completed");
  console.log(profile);
  let account = new Account();
  account.displayname = profile.displayName;
  account.socialId = profile.id;
  account.provider = 'google';
  account.save().then((user) => {
    console.log("New User Created: " + user);
  }, (err) => {
    console.log("Err in creating user" + err);
  })
}))
