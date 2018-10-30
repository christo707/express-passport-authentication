import { Router } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import * as passportSetup from '../../config/linkedin-passport-setup';

export default () => {
  let api = Router();

//auth with linkedin
api.get('/', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_basicprofile']
}));

//Callback for LinkedIn
api.get('/redirect', passport.authenticate('linkedin'), (req,res) => {
  res.redirect('/api/profile');
});

  return api;
}
