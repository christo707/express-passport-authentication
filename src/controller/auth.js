import { Router } from 'express';
import passport from 'passport';
import googleauth from './authenticators/google';
import facebookauth from './authenticators/facebook';
import githubauth from './authenticators/github';
//import initializeDb from '../db';
//import middleware from '../middleware';

export default () => {
  let api = Router();

api.get('/', (req, res) => {
  res.send("Auth is UP!!!");
});

api.get('/login', (req,res) => {
  res.render('login', { user: req.user});
});

api.get('/register', (req,res) => {
  res.render('register', { user: req.user});
});

//auth google
api.use('/google', googleauth());
api.use('/github', githubauth());
api.use('/facebook', facebookauth());
api.use('/linkedin', facebookauth());

//auth logout
api.get('/logout', (req,res) => {
  req.logout();
  res.redirect('/api/auth/login');
});

  return api;
}
