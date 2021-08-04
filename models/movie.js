const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Combined the Movie and Rating Schema here to use object type of MovieSchema in RatingSchema
 *
 * TODO
 *
 * add UserSchema also here and add pre hook
 *                  OR
 * figure out how to use this with using different models;
 */

const { UserSchema } = require("./user");

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

const RatingSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: false,
  },
  user: {
    type: UserSchema,
    required: true,
  },
  movie: {
    type: MovieSchema,
    required: true,
  },
});

const Rating = mongoose.model("Rating", RatingSchema);

/**
 * Inside pre hook, dont use ES6 syntax for callbacks. Will give errors
 * mongoose doesn't support this.
 */
MovieSchema.pre("remove", { document: true, query: false }, function (next) {
  Rating.remove({ movie: this }).exec();
  next();
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = { Movie, MovieSchema, Rating, RatingSchema };
