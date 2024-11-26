const { getAllCast } = require("../services/cast");
const { getMovieById, attachCastToMovvie } = require("../services/movie");

module.exports = {
    attachGet: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);
        if (!movie) {
            res.render(`404`);
            return;
        };
        const cast = await getAllCast();

        res.render(`cast-attach`, { movie, cast });
    },
    attachPost: async (req, res) => {
        const movieId = req.params.id;
        const castId = req.body.cast;
        if (!movieId || !castId) {
            res.render(`404`);
            return;
        }


        if (castId == `none`) {
            const movie = await getMovieById(movieId);
            const cast = await getAllCast();
            res.render(`cast-attach`, { movie, cast, error: true });
            return;
        }

        const movie = await getMovieById(movieId);

        await attachCastToMovvie(movie, castId);

        res.redirect(`/details/` + movieId);
    }
}