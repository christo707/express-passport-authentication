const authCheck = (req, res, next) => {
  if(!req.currentUser){
    //User not logged In
    res.send('You are not authorised');
    //res.redirect('/api/auth/login');
  } else {
    //User Logged In
    next();
  }
}

module.exports = {
  authCheck
};
