const express = require("express");
const router = express.Router();
const wrapAsync = require("../utlis/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage });

// New Route
router.get("/new", isLoggedIn, wrapAsync(listingController.New));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.Edit));

//Delete Route
router.get("/:id/delete", isLoggedIn, isOwner, wrapAsync(listingController.Delete));

router.route("/")
    //index Route
    .get(wrapAsync(listingController.index))
    //create Route
    .post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingController.Create));

router.route("/:id")
    // Show Route
    .get(wrapAsync(listingController.Show))
    // Update Route
    .put(isLoggedIn, isOwner, validateListing, upload.single('listing[image]'), wrapAsync(listingController.Update));


module.exports = router;