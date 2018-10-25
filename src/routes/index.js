import express from 'express';
import auth from '../controller/auth';
//import initializeDb from '../db';
//import middleware from '../middleware';

let router = express();

  // api routes v1 (/v1)
  let r = express.Router();
  router.use('/', r);

  r.get('/', (req, res) => {
    res.send("Passport Authentication Api is UP!!!");
  //res.render('login');
  });

  router.use('/auth', auth());

export default router;
