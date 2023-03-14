const express = require("express");
const router = express.Router();

const AppController = require("../controller/AppController");

const {
  register, login, registerMail, authenticate, updateUser,
  resetPassword, getUser, createResetSession, generateOTP, verifyOTP
} = AppController;


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/registerMail").post(registerMail);

router.route("/authenticate").post(authenticate);

router.route("/user/:username").get(getUser);

router.route("/generateOTP").get(generateOTP);

router.route("/verifyOTP").get(verifyOTP);

router.route("/createResetSession").get(createResetSession);

router.route("/updateUser").patch(updateUser);

router.route("/resetPassword").patch(resetPassword);

module.exports = router