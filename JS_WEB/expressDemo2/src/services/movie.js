const fs = require(`fs/promises`);
const { Movie } = require("../Models/Movie");

const filePath = `./data/database.json`;

async function readFile() {
    const data = await fs.readFile(filePath);

    return JSON.parse(data.toString());
}

async function writeFile(data) {
    await fs.writeFile(filePath, JSON.stringify(data));
}

async function createMovie(movieData) {
    const id = uuid();
    const movie = {
        id,
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        imageURL: movieData.imageURL,
        rating: Number(movieData.rating),
        description: movieData.description
    }

    const movies = await readFile();

    movies.push(movie);

    await writeFile(movies);

    return toMovieModel(movie);
}

function uuid() {
    return `xxxx-xxxx`.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}


function toMovieModel(data) {
    const movie = new Movie();
    movie.id = data.id;
    movie.genre = data.genre;
    movie.director = data.director;
    movie.description = data.description;
    movie.imageURL = data.imageURL;
    movie.rating = data.rating;
    movie.year = data.year;
    movie.title = data.title;
    return movie;
}

async function getAllMovies() {
    const movies = await readFile();
    return movies.map(toMovieModel);
}

async function getMovieById(id) {
    const movies = await readFile();
    const movie = movies.find(m => m.id == id);

    return movie ? toMovieModel(movie) : movie;
}

module.exports = {
    readFile, writeFile, getAllMovies, getMovieById, createMovie
}
