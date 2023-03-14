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
    res.status(StatusCodes.CREATED).json({ success: true, user });
  },
  login: async (req, res) => {
    res.status(200).json({ success: true, msg: "This is the login route" });
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