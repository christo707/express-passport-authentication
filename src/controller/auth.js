import { Router } from 'express';
import passport from 'passport';
import googleauth from './authenticators/google';
//import initializeDb from '../db';
//import middleware from '../middleware';

export default () => {
  let api = Router();

api.get('/', (req, res) => {
  res.send("Auth is UP!!!");
});

//auth google
api.get('/login', (req,res) => {
  res.render('login');
});

api.use('/google', googleauth());

//auth logout
api.get('/logout', (req,res) => {
  res.send('Logging Out!!!');
});

  return api;
}
