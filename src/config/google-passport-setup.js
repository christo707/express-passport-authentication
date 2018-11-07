import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './keys';
import * as serialize from './serialize';
import Account from '../model/account';
import User from '../model/user';

passport.use(
  new GoogleStrategy({
  callbackURL: '/api/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  console.log("Google Authentication completed");
  console.log("User with email: " + profile.emails[0].value);
  Account.findOne({provider: 'google', socialId: profile.id}).then((currentAccount) => {
    if(currentAccount){
      //User already exist
      User.findOne({email: profile.emails.value}).then((user) => {
          if(user){
            let currentUser = {account: currentAccount, user: user}
            done(null, currentUser);
          } else {
            let currentUser = {account: currentAccount, user: {}}
            done(null, currentUser);
          }
      }, (err) => {
        console.log("Error in fetching user details for google account " + err);
      })
    } else {
      //Creating New Account
      let account = new Account();
      account.socialId = profile.id;
      account.provider = 'google';
      account.email = profile.emails[0].value;
      account.save().then((acc) => {
        console.log("New Account Created: " + acc);
        User.findOne({email: profile.emails[0].value}).then((user) => {
            if(user){
              let currentUser = {account: acc, user: user}
              done(null, currentUser);
            } else {
              let user = new User();
              user.displayname = profile.displayName;
              console.log('Name: ' +  user.displayname);
              user.thumbnail = profile._json.image.url;
              user.email = profile.emails[0].value;
              user.gender = profile.gender;
              user.save().then((newUser) => {
                console.log("new Account and user created");
                let currentUser = {account: acc, user: newUser};
                done(null, currentUser);
              }, (err) => {
                console.log("Err in creating user using google" + err);
              })
            }
        }, (err) => {
          console.log("Error in fetching user details for google account " + err);
        })
      }, (err) => {
        console.log("Err in creating account using google" + err);
      })
    }
  })

}))
