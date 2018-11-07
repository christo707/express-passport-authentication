import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let User = new Schema({
  displayname: String,
  gender: String,
  thumbnail: String,
  email: {
        type:String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('User', User);
