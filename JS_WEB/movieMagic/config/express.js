const express = require(`express`);


module.exports = {
    configExpress(app) {
        app.use(express.urlencoded({ extended: true }));
        app.use(`/static`, express.static(`static`));
    }
}