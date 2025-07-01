const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utlis/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
    // Rendering Signup Form
    .get(userController.renderSignup)
    // Used For signup up user
    .post(wrapAsync(userController.signupUser));

router.route("/login")
    // Rendering login user
    .get(userController.renderLogin)
    // login User
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.loginUser));

// Logout User
router.get("/logout", userController.logoutUser)

module.exports = router;