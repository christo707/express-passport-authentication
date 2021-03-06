import express from 'express';
import auth from '../controller/auth';
import profile from '../controller/profile';
import initializeDb from '../db';
//import middleware from '../middleware';

let router = express();

// connect to db
initializeDb(db => {

  // api routes v1 (/v1)
  let r = express.Router();
  router.use('/', r);

  r.get('/', (req, res) => {
    res.send("Passport Authentication Api is UP!!!");
  //res.render('login');
  });

  router.use('/auth', auth());
  router.use('/profile', profile());
});

export default router;
