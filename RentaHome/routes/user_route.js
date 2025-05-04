// Modules & Imports
const express = require("express")
const path = require('path')
const rootPath = require("../utils/root_directory")
const userRoute = express.Router()

// Routes Handling
userRoute.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'homepage.html'))
})

module.exports = userRoute
