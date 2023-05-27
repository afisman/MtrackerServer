require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'https://mtracker0.netlify.app/');
    next();
});

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = app;