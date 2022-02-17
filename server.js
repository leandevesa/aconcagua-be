const express = require("express");
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config()

const errorHandler = require('./errors/errorHandler');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set("PORT", process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.listen(app.get("PORT"), function() {
    console.log("API running");
});

app.get("/healthcheck", async function(req, res) {
    try {
        res.send("ACONCAGUA");
    } catch (err) {
        errorHandler.handle(req, res, err);
    }
});