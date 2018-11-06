import passport from 'passport';
import Account from '../model/account';
import User from '../model/user';

passport.serializeUser((account, done) => {
  done(null, account.account.id);
});

passport.deserializeUser((id, done) => {
  Account.findById(id).then((account) => {
    console.log(account);
    User.findOne({email: account.email}).then((user) => {
          done(null, user);
    });
  });
});
