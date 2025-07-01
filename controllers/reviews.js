const Review = require("../models/review");
const Listing = require("../models/listing");

// create review 
const createReview = async (req, res) => {
    // let { id } = req.params;
    // const listing = await Listing.findById(id);  Another way to do the same thing is
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.review.push(newReview._id);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listing._id}`);
}

// Delete Review 
const deleteReview = async (req, res, next) => {

    let { id, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
}

module.exports = {
    createReview,
    deleteReview
}