import { Router } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import * as passportSetup from '../../config/github-passport-setup';

export default () => {
  let api = Router();

//auth with GitHub
api.get('/', passport.authenticate('github', {
  scope: ['user']
}));

//Callback for GitHub
api.get('/redirect', passport.authenticate('github'), (req,res) => {
  res.send('GitHub');
  //res.redirect('/api/profile');
});

  return api;
}
