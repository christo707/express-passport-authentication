import { Router } from 'express';
import passport from 'passport';
import * as passportSetup from '../config/passport-setup'
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import jwt from 'jsonwebtoken';

export default () => {
  let api = Router();

api.get('/', (req, res) => {
  res.send("Auth is UP!!!");
});

//auth google
api.get('/login', (req,res) => {
  res.render('login');
});

//auth with google
api.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

//Callback for Google
api.get('/google/redirect', (req,res) => {
  res.render('Google Redirect');
});

//auth logout
api.get('/logout', (req,res) => {
  res.send('Logging Out!!!');
});

  return api;
}
