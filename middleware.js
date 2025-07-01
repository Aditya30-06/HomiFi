const wrapAsync = require("./utlis/wrapAsync");
const Listing = require("./models/listing");
const { listingSchema, reviewSchema } = require("./schema.js");
const expressError = require("./utlis/expressError.js");
const Review = require("./models/review.js");


function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        //redirect Url save
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged In to do this !!");
        return res.redirect("/login");
    }
    next();
};

const saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

const isOwner = wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "For this action You must be owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
});

const isReviewAuthor = wrapAsync(async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "For this action You must be Author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
});

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new expressError(400, error);
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new expressError(400, error);
    } else {
        next();
    }
};

module.exports = {
    isLoggedIn,
    saveRedirectUrl,
    isOwner,
    validateListing,
    validateReview,
    isReviewAuthor,
};
