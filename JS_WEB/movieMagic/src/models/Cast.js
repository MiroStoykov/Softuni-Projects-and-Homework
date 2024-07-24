const { Schema, SchemaTypes: Types, model } = require(`mongoose`);

const castShema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    movie: {
        type: Types.ObjectId,
        ref: `Movie`
    }
});

const Cast = model(`Cast`, castShema)

module.exports = {
    Cast
};