const express = require(`express`);
const { configHbs } = require("../config/hbs");
const { configExpress } = require("../config/express");
const { router } = require("../config/routes");
const { configDatabase } = require("../config/database");
const { getAllCast } = require("./services/cast");

const PORT = 3000;

async function start() {
    const app = express();
    await configDatabase();
    configHbs(app);
    configExpress(app);
    app.use(router);
    app.listen(PORT, () => {
        console.log(`ap running on port ${PORT}`);
    });
    getAllCast();
}

start();



