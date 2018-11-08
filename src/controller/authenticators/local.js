import { Router } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import * as passportSetup from '../../config/local-passport-setup';
import Account from '../../model/account';
import User from '../../model/user';

export default () => {
  let api = Router();

//login with local
api.post('/login', (req, res, next) => {
    console.log("In redirect");
    console.log('In Local Login');
    //res.redirect('/api/profile');
    passport.authenticate('local', {                         //passort.authenticate('strategy', properties, callback)
      failureRedirect: '/api/auth/login',
      successRedirect: '/api/profile'
    },(err, user, info) => {
      if(err && !user) {
        res.render('login', { user: req.user, msg: 'Server Error'});
      }
      if(info && info.msg){
        res.render('login', { user: req.user, msg: info.msg});
      }
    })(req, res, next);
  });


//SignUp with Local
api.post('/register', (req, res) => {
  console.log("Register Body:  "+ JSON.stringify(req.body));
  var username = req.body.email;
  var password = req.body.password;
  var displayName = req.body.name;
  Account.findOne({provider: 'local', email: username}).then((acc, err) => {
    if(err){
      //res.status(500).json({"msg": "Server Error"});
      res.render('register', { user: req.user, msg: 'Server Error'});
    }
    else if(acc){
      //res.status(500).json({"msg": "User Already exist"});
      res.render('register', { user: req.user, msg: 'User Already exist'});
    } else {
      var account = new Account();
      account.socialId = 'undefined';
      account.provider = 'local';
      account.email = username;
      account.password = account.generateHash(password);
  //    console.log("Hash: " + account.generateHash(password));
      console.log("Account: " + account);
      account.save().then((newAccount, err) => {
        if(err){
          console.log("Error: " + err);
          //res.status(500).json({"msg": "Fail to create Account"});
          res.render('register', { user: req.user, msg: 'Fail to create Account'});
        } else {

          User.findOne({email: username}).then((user) => {
              if(user){
                let currentUser = {account: newAccount, user: user}
                //res.status(201).json({"msg": "User exist with email. LocalStrategy added.."});
                res.render('login', { user: req.user, msg: 'User exist. LocalStrategy added.'});
              } else {
                let user = new User();
                user.displayname = displayName;
                console.log('Name: ' +  user.displayname);
                user.thumbnail = 'undefined';
                user.email = username;
                user.gender = 'undefined';
                user.save().then((newUser) => {
                  console.log("New Account and user created with Local");
                  let currentUser = {account: newAccount, user: newUser};
                  //res.status(201).json({"msg": "New Account and user created with Local.."});
                  res.render('login', { user: req.user, msg: 'Registeration Successfull. Please Login.'});
                }, (err) => {
                  console.log("Err in creating user using Local" + err);
                    res.render('register', { user: req.user, msg: 'Server Error'});
                })
              }
          }, (err) => {
            console.log("Error in fetching user details for local account " + err);
              res.render('register', { user: req.user, msg: 'Server Error'});
          })

        }
      })
    }
  })
});


  return api;
}
