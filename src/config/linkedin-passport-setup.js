import passport from 'passport';
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
import keys from './keys';
import * as serialize from './serialize';

passport.use(
  new LinkedInStrategy({
  callbackURL: '/api/auth/linkedin/redirect',
  clientID: keys.linkedin.clientID,
  clientSecret: keys.linkedin.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  console.log("LinkedIn Authentication completed");
  console.log(profile);
  // Account.findOne({socialId: profile.id}).then((currentAccount) => {
  //   if(currentAccount){
  //     //User already exist
  //     done(null, currentAccount);
  //   } else {
  //     //Creating New User
  //     let account = new Account();
  //     account.displayname = profile.displayName;
  //     account.socialId = profile.id;
  //     account.provider = 'google';
  //     account.thumbnail = profile._json.image.url;
  //     account.save().then((user) => {
  //       console.log("New User Created: " + user);
  //       done(null, user);
  //     }, (err) => {
  //       console.log("Err in creating user" + err);
  //     })
  //   }
  // })

}))
