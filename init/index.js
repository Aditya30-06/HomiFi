const initData = require("./data.js");

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/HomiFi');
}
const Listing = require("../models/listing.js");

const initDB = async () => {
    await Listing.deleteMany({});
    console.log("deleted");
   initData.data = initData.data.map((obj) => ({ ...obj, owner: '6860f5ba898c8123e098c446' }));
    await Listing.insertMany(initData.data);
    console.log("Data was intialised");
}
initDB();
