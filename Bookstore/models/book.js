const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required..."],
      trim: true
    },
    author: {
      type: String,
      required: [true, "Forget? Type 'Unknown'..."],
      trim: true
    },
    publishDate: {
      type: Number,
      required: [true, "Please enter a valid year, Required..."],
      min: 0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
)

module.exports = mongoose.model("Book", bookSchema)