const { Cast } = require(`../models/Cast`);

async function createCast(castData) {


    const cast = new Cast({
        name: castData.name,
        age: Number(castData.age),
        born: Number(castData.born),
        nameInMovie: castData.nameInMovie,
        imageURL: castData.imageURL,
        movie: castData.movie
    })

    await cast.save();
    return cast;
}

async function getAllCast() {
    const cast = await Cast.find().lean();
    return cast;
}


module.exports = {
    createCast,
    getAllCast
}
