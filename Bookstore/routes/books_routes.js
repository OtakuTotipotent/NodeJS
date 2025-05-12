const express = require("express")
const router = express.Router()
const { getAllBooks, getBookByID, addNewBook, updateBookByID, deleteBookByID } = require("../controllers/books_controller")


router.get('/get', getAllBooks)

router.get('/get/:id', getBookByID)

router.post('/add', addNewBook)

router.put('/update/:id', updateBookByID)

router.delete('/delete/:id', deleteBookByID)


module.exports = router