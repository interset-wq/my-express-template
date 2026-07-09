const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100
  }
});


/**
 * Virtual props
 * Can not use arrow func
 */

GenreSchema.virtual("genre").get(function() {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);