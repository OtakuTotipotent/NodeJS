// Imports & Variables
require("dotenv").config()
const express = require("express")
const dbConnection = require("./databases/mongodb")
const booksRouter = require("./routes/books_routes")
const usersRouter = require("./routes/user_routes")
const rootRouter = require("./routes/root_routes")
const adminRouter = require("./routes/admin_routes")

const PORT = process.env.PORT || 3001


// Configurations
const app = express()
app.use(express.json())
dbConnection()


// Middlewares & Routing
app.use('/books', booksRouter)
app.use('/users', usersRouter)
app.use(adminRouter)
app.use(rootRouter)


// Entry Point
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
