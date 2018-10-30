import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Account = new Schema({
//  username: String,
  diaplayname: String,
  socialId: String,
  provider: {
        type:String,
        required: true,
    },
  thumbnail: String
  // email: {
  //       type:String,
  //       required: true,
  //       unique: true
  //   }
});

module.exports = mongoose.model('Account', Account);
