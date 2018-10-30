import passport from 'passport';
import Account from '../model/account';

passport.serializeUser((account, done) => {
  done(null, account.id);
});

passport.deserializeUser((id, done) => {
  Account.findById(id).then((account) => {
    done(null, account);
  });
});
