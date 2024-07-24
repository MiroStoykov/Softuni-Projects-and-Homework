const { Movie } = require("../models/Movie");

async function getAllMovies() {
    const movies = await Movie.find().lean();
    console.log(movies);
    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean();
    return movie;
}

async function createMovie(movieData) {
    const movie = new Movie({
        imageURL: movieData.imageURL,
        genre: movieData.genre,
        year: Number(movieData.year),
        director: movieData.director,
        title: movieData.title,
        rating: Number(movieData.rating),
        description: movieData.description,
    })

    await movie.save();

    return movie;
}


module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
}