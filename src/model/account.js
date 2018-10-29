import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Account = new Schema({
  username: String,
  socialId: String,
  provider: {
        type:String,
        required: true
    },
  email: {
        type:String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Account', Account);
