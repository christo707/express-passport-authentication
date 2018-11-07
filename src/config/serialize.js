import passport from 'passport';
import Account from '../model/account';
import User from '../model/user';

passport.serializeUser((account, done) => {
  console.log("Serializing: " + account);
  done(null, account.account.id);
});

passport.deserializeUser((id, done) => {
  Account.findById(id).then((account) => {
    console.log("Deserializing Account: " + account);
    User.findOne({email: account.email}).then((user) => {
          console.log("Deserializing User: " + user);
          done(null, user);
    });
  });
});
