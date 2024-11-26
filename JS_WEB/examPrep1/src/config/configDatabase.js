const mongoose = require(`mongoose`);
//TODO import models

async function configDatabase(params) {
    //TODO set database name
    const conectionString = `mongodb://localhost:27017/exam-db`;

    await mongoose.connect(conectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`database conected`);

}

module.exports = {
    configDatabase,
}