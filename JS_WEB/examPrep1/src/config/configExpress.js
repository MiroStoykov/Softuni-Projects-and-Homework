const cookieParser = require("cookie-parser");
const handlebars = require(`express-handlebars`);
const express = require(`express`);

module.exports = {
    configExpress(app) {
        const hbs = handlebars.create({
            extname: `hbs`
        });

        app.engine(`hbs`, hbs.engine);
        app.set(`view engine`, `hbs`);

        app.use(cookieParser);

        app.use(`/static`, express.static(`static`));

        app.use(express.urlencoded({ èxtended: true }));

        //TODO add sesion midleware
    }
}
