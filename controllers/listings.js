const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

//index Route
const index = async (req, res) => {
    const allListings = await Listing.find({});
    req.flash("success", "You are on Home page");

    res.render("./listings/index.ejs", { allListings });

}

// New Route
const New = async (req, res) => {
    res.render("./listings/new.ejs");
}

// Show Route
const Show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "review", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing You requested does not exist");
        res.redirect("/listings")
    }
    else {
        res.render("./listings/show.ejs", { listing });
    }

}

//create Route
const Create = async (req, res, next) => {
    let response = await geoCodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
        .send()

    let url = req.file.path;
    let fileName = req.file.filename;
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = { url, fileName };
    newlisting.geometry = response.body.features[0].geometry
    await newlisting.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
}

// Edit Route
const Edit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing You requested does not exist");
        res.redirect("/listings")
    }
    else {
        res.render("listings/edit.ejs", { listing });
    }

}

// Update Route
const Update = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    // If no new image URL is provided, keep the existing one
    if (!req.body.listing.image || !req.body.listing.image.url) {
        req.body.listing.image = listing.image;
    }
    let response = await geoCodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    }).send();
    listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    listing.geometry = response.body.features[0].geometry;

    if (typeof req.file != "undefined") {
        let url = req.file.path;
        let fileName = req.file.filename;
        listing.image = { url, fileName };
    }
    await listing.save();

    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
}

// Delete Route
const Delete = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
}

module.exports = {
    index,
    New,
    Show,
    Create,
    Edit,
    Update,
    Delete,
}