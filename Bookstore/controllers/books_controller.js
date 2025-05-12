const Book = require("../models/book")


async function getAllBooks(req, res) {
  console.log("inside the /get request")
  try {
    const all_books = await Book.find({})
    if (all_books.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books information fetched successfully...",
        data: all_books
      })
    } else {
      res.status(404).json({
        success: false,
        message: "No books found...Records are empty."
      })
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error fetching the books...",
      data: ""
    })
  }
}

async function getBookByID(req, res) {
  console.log("inside the /get/id request")
  try {
    const book_id = req.params.id
    const given_book = await Book.findById(book_id)
    if (given_book) {
      res.status(200).json({
        success: true,
        message: 'Desired book found...',
        data: given_book
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Desired book with ID not found...try again"
      })
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error fetching the books..."
    })
  }
}

async function addNewBook(req, res) {
  console.log("inside the /add request")

  try {
    const newBook = await Book.create(req.body)
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully...",
        data: newBook
      })
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error fetching the books...",
      data: ""
    })
  }
}

async function updateBookByID(req, res) {
  console.log("inside the /update/id request")
  try {
    const book_id = req.params.id
    const book_updates = req.body
    const given_book = await Book.findByIdAndUpdate(book_id, book_updates, { new: true })
    if (given_book) {
      res.status(200).json({
        success: true,
        message: 'Desired book found & updated successfully...',
        data: given_book
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Desired book with ID not found...try again"
      })
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error fetching the books...",
      data: ""
    })
  }
}

async function deleteBookByID(req, res) {
  console.log("inside the /delete/id request")
  try {
    const book_id = req.params.id
    const given_book = await Book.findByIdAndDelete(book_id)
    if (given_book) {
      res.status(200).json({
        success: true,
        message: 'Desired book found & deleted...',
        data: given_book
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Desired book with ID not found...try again"
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error fetching the books...",
      data: ""
    })
  }
}


module.exports = {
  getAllBooks,
  getBookByID,
  addNewBook,
  updateBookByID,
  deleteBookByID
}