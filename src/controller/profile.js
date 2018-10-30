import { Router } from 'express';
import passport from 'passport';
import { authCheck } from '../middleware';
//import initializeDb from '../db';
//import middleware from '../middleware';

export default () => {
  let api = Router();

api.get('/', authCheck, (req, res) => {
  //res.send("Profile is UP!!! " + req.user.displayName);
  res.render('profile', { user: req.user});
});


  return api;
}
