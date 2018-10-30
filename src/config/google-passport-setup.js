import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './keys';
import * as serialize from './serialize';

passport.use(
  new GoogleStrategy({
  callbackURL: '/api/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  console.log("Google Authentication completed");
  console.log(profile);
  Account.findOne({socialId: profile.id}).then((currentAccount) => {
    if(currentAccount){
      //User already exist
      done(null, currentAccount);
    } else {
      //Creating New User
      let account = new Account();
      account.displayname = profile.displayName;
      account.socialId = profile.id;
      account.provider = 'google';
      account.thumbnail = profile._json.image.url;
      account.save().then((user) => {
        console.log("New User Created: " + user);
        done(null, user);
      }, (err) => {
        console.log("Err in creating user" + err);
      })
    }
  })

}))
