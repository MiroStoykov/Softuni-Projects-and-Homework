const { Schema, SchemaTypes: Types, model } = require(`mongoose`);

const movieShema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1878,
        max: 2100
    },
    imageURL: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    cast: {
        type: [Types.ObjectId],
        ref: `Cast`,
        default: []
    }
});

const Movie = model(`Movie`, movieShema);

module.exports = {
    Movie
}