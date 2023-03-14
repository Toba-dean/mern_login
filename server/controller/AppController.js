const { StatusCodes } = require('http-status-codes');

const { BadRequestError, UnauthenticatedError } = require('../errors');
const User = require("../model/User.model");

const AppController = {
  register: async (req, res) => {
    const { username, email, password, profile } = req.body;
    if (!email || !username || !password) {
      throw new BadRequestError('All fields must be filled.');
    }

    const user = await User.create({ ...req.body, profile: profile || "" });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ success: true, user, token });
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new BadRequestError('All fields must be filled.');
    }

    const user = await User.findOne({ username });
    if (!user) {
      throw new UnauthenticatedError('No user with this username.');
    }

    const isCorrectPassword = await user.comparePassword(password);
    if (!isCorrectPassword) {
      throw new UnauthenticatedError('Incorrect password entered.');
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ success: true, username: user.username, token });
  },
  registerMail: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the register mail route" });
  },
  authenticate: async (req, res) => {
    res.end();
  },
  getUser: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the get user route" });
  },
  generateOTP: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the generate OTP route" });
  },
  verifyOTP: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the verify OTP route" });
  },
  createResetSession: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the create reset session route" });
  },
  updateUser: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the update user route" });
  },
  resetPassword: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the reset password route" });
  },
};

module.exports = AppController;