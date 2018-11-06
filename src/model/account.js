import mongoose from 'mongoose';
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

module.exports = mongoose.model('Account', Account);
