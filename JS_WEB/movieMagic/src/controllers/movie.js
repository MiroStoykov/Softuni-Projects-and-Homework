const { createMovie } = require("../services/movie");

module.exports = {
    createGet: (req, res) => {
        res.render(`create`);
    },
    createPost: async (req, res) => {
        const errors = {
            imageURL: !req.body.imageURL,
            genre: !req.body.genre,
            year: !req.body.year,
            director: !req.body.director,
            title: !req.body.title,
            rating: !req.body.rating,
            description: !req.body.description
        }

        if (Object.values(errors).includes(true)) {
            res.render(`create`, { movie: req.body, errors });
            return;
        }
        const result = await createMovie(req.body);
        res.redirect(`/details/` + result._id);
    }
}