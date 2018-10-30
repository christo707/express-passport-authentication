import { Router } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import * as passportSetup from '../../config/google-passport-setup';


export default () => {
  let api = Router();

//auth with google
api.get('/', passport.authenticate('google', {
  scope: ['profile']
}));

//Callback for Google
api.get('/redirect', passport.authenticate('google'), (req,res) => {
  res.redirect('/api/profile');
});

  return api;
}
