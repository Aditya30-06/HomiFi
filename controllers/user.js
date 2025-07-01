const User = require("../models/user");

// Rendering Signup Form
const renderSignup = (req, res) => {
    res.render("users/signup.ejs");
}

// Used For signup up user
const signupUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
    }
    catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup")
    }
}

// Rendering login user 
const renderLogin = (req, res) => {
    res.render("users/login.ejs")
}

// posting Login 
const loginUser = async (req, res) => {
    req.flash("success", "Welcome Back to Wanderlust !! You are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

// logout user 
const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out now");
        res.redirect("/listings")
    })
}

module.exports = {
    signupUser,
    renderSignup,
    renderLogin,
    loginUser,
    logoutUser,
}