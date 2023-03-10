const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username."],
    minLength: 4,
    maxLength: 100
  },
  email: {
    type: String,
    required: [true, 'Please provide you email.'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a secure password.'],
    minLength: 4
  },
  firstname: { type: String },
  lastname: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String }
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

UserSchema.methods.createJWT = function () {
  return jwt.sign({ username: this.username, userId: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

module.exports = mongoose.model('User', UserSchema);