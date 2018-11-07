import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

let Account = new Schema({
  socialId: String,
  provider: {
        type:String,
        required: true,
    },
  email: String,
  password: String
});

// methods
// generating a hash
Account.methods.generateHash = (password) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
//   bcrypt.genSalt(10, (err, salt) => {
//     console.log("Salt: " + salt);
//     bcrypt.hash(password, salt, (err, hash) => {
//       console.log("Hash: " + hash);
//         return hash;
//     });
// });
};

// checking if password is valid
Account.methods.validPassword = function(password, hash) {
  return bcrypt.compareSync(password, hash);
  // bcrypt.compare(password, hash).then((res) => {
  //  return res;
  // });
};


module.exports = mongoose.model('Account', Account);
