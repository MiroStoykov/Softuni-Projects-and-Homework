const mongoose = require(`mongoose`);
require(`../src/models/Movie`);
require(`../src/models/Cast`);
const conectionString = `mongodb://localhost:27017/movie-magic`;


async function configDatabase() {
    await mongoose.connect(conectionString);
    console.log(`db con`);
}

module.exports = {
    configDatabase
}