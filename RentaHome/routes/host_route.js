// Modules & Imports
const express = require("express")
const path = require("path")
const rootPath = require("../utils/root_directory")
const hostRoute = express.Router()

// Routes Handling
hostRoute.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'home_making.html'))
})

hostRoute.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'home_made.html'))
})

module.exports = hostRoute