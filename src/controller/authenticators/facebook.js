import { Router } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import * as passportSetup from '../../config/facebook-passport-setup';

export default () => {
  let api = Router();

//auth with FaceBook
api.get('/', passport.authenticate('facebook', {
  scope: ['public_profile','email']
}));

//Callback for Facebook
api.get('/redirect', passport.authenticate('Facebook'), (req,res) => {
  res.redirect('/api/profile');
});

  return api;
}
