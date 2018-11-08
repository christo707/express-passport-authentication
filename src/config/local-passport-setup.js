import passport from 'passport';
const LocalStrategy   = require('passport-local').Strategy;
import keys from './keys';
import * as serialize from './serialize';
import Account from '../model/account';
import User from '../model/user';

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (username, password, done) => {
  console.log("In callback");

  Account.findOne({provider: 'local', email: username}).then((currentAccount) => {
    if(currentAccount){
      //User already exist
      let account = new Account();
      let check = account.validPassword(password, currentAccount.password);
      if(check == true){

        User.findOne({email: username}).then((user) => {
            if(user){
              console.log('User found');
              let currentUser = {account: currentAccount, user: user};
              console.log("");
              done(null, currentUser);
            } else {
              console.log("Account Present but User not present");
              done(null , false, {
                msg: 'Account available but User not present'
              });
            }
        }, (err) => {
          console.log("Error in fetching user details for Local account " + err);
          done(null , false, {
            msg: 'Server Error'
          });
        })

      }else {
        done(null , false, {
          msg: 'Wrong Password'
        });
      }

    } else {
      console.log("User doesnot exist");
      done(null , false, {
        msg: 'User doesnot exist'
      });
    }
  }, (err) => {
    console.log("Error in fetching account" + err);
    done(null , false, {
      msg: 'Server Error'
    });
  })



})

)
