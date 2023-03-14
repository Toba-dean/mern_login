const express = require("express");
const router = express.Router();


router.route("/register").post((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/login").post((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/registerMail").post((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/authenticate").post((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/user/:username").get((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("generateOTP").get((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/verifyOTP").get((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/createResetSession").get((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/updateUser").patch((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

router.route("/resetPassword").post((req, res) => {
  res.status(200).json({ success: true, msg: "This is the register route" })
});

module.exports = router