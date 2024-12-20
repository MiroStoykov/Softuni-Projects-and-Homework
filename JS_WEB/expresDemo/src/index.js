const express = require(`express`);
const handlebars = require(`express-handlebars`);
const { homeController } = require("./controllers/home");
const { catalogController, detailsController } = require("./controllers/catalog");

const app = express();
const hbs = handlebars.create({
    extname: `.hbs`,
    defaultLayout: `default`
});

app.engine(`.hbs`, hbs.engine);
app.set(`view engine`, `.hbs`);

app.get(`/`, homeController);
app.get(`/catalog`, catalogController);
app.get(`/catalog/:id`, detailsController);

app.listen(3000);