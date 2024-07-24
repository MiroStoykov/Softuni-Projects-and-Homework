const { extname } = require("path");
const express = require(`express`);
const { configHbs } = require("./config/hbs");
const { configExpress } = require("./config/express");
const { router } = require("./config/routes");


const app = express();
const PORT = 3000;

configHbs(app);
configExpress(app);

app.use(router);
app.listen(PORT);

