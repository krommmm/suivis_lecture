require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const express = require("express");
const app = express();


mongoose.connect(`mongodb+srv://${process.env.USERR}:${process.env.PASSWORD}@cluster0.fb2d6.mongodb.net/`)
    .then(() => console.log("Connexion to mongoDB succed"))
    .catch((err) => console.log("Connection to mongoDB failled"));

    app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content,Accept, Content-Type, Authorization");
    next();
});


app.use("/api/auth", userRoute);

module.exports = app;