import { Router } from 'express';
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
api.get('/google', (req,res) => {
  res.send('Login with Google');
});

//auth logout
api.get('/logout', (req,res) => {
  res.send('Logging Out!!!');
});

  return api;
}
