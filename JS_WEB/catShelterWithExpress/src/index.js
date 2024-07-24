const express = require(`express`);
const { configExpress } = require("../config/configExpress");
const { configHbs } = require("../config/configHbs");

const app = express();
const port = 3000;

configExpress(app);
configHbs(app);
app.listen(port);


