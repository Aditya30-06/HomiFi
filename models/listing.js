const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     filename: String,
    //     url: {
    //         type: String,
    //         default: "https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg",
    //         set: (v) => v === "" ? "https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg" : v,
    //     }
    // },
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    review: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await review.deleteMany({ _id: { $in: listing.review } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;