const { Movie } = require("../models/Movie");

async function getAllMovies() {
    const movies = await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    return Movie.findById(id);
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

async function attachCastToMovvie(movie, castId) {
    movie.cast.push(castId);
    await movie.save;
}


module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    attachCastToMovvie
}