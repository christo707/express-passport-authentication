import { Router } from 'express';
import passport from 'passport';
import googleauth from './authenticators/google';
import githubauth from './authenticators/github';
//import initializeDb from '../db';
//import middleware from '../middleware';

export default () => {
  let api = Router();

api.get('/', (req, res) => {
  res.send("Auth is UP!!!");
});

//auth google
api.get('/login', (req,res) => {
  res.render('login', { user: req.user});
});

api.use('/google', googleauth());
api.use('/github', githubauth());

//auth logout
api.get('/logout', (req,res) => {
  req.logout();
  req.redirect('/api/auth/login');
});

  return api;
}
