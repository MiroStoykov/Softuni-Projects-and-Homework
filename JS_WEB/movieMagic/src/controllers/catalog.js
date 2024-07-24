const { getAllMovies, getMovieById } = require("../services/movie");

module.exports = {
    home: async (req, res) => {
        const movies = await getAllMovies();
        res.render(`home`, { movies });
    },
    details: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);
        if (!movie) {
            res.render(`404`);
            return;
        }
        movie.starRating = `&#x2605`.repeat(movie.rating);
        res.render(`details`, { movie });
    },
    search: async (req, res) => {
        if (req.originalUrl.length > 7) {
            const values = takeValusesFromURL(req.originalUrl);
            const movies = await searchMovie(values);
            res.render(`search`, { movies });
            return;
        }
        res.render(`search`);
    }
}

function takeValusesFromURL(url) {
    const valuesAll = url.substring(13);
    const values1 = valuesAll.split(`&genre=`);
    const values2 = values1[1].split(`&year=`);
    const values = [values1[0].replace(`+`, ` `), values2[0], values2[1]];
    return values;
}

async function searchMovie(values) {
    const result = [];
    const movies = await getAllMovies();

    for (const value of values) {
        for (const movie of movies) {
            if (movie.title == value || movie.genre == value || movie.year == value) {
                result.push(movie);
            }
        }
    }

    return result;
}