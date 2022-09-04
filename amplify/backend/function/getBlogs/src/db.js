"use strict";
const mongoose = require("mongoose");
let cachedDb = null;
const connectToDataBase = async () => {
    const { MONGO_URL } = process.env;
    if (mongoose.connections[0].readyState) {
        console.log("Already connected");
        return;
    }
    else{
        // Use new database connection
        return mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((db) => {
            cachedDb = db;
           console.log("Connected to database");
    })
    }
}

module.exports = connectToDataBase;