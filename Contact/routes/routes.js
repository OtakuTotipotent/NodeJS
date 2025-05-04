// Modules & Imports
const express = require("express")
const path = require("path")
const rootPath = require("../utils/path_utility")

// Configurations
const router = express.Router()

// Routes Handling
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "homepage.html"))
})

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "contact-us.html"))
})

// Added homes storage
const userRequests = []

router.post("/contact-us", (req, res, next) => {
  // registeredHomes.push(req.body)
  res.sendFile(path.join(rootPath, "views", "contact-response.html"))
  console.log("Contact Post: ", req.body)
})

// Exports
exports.router = router
exports.userRequests = userRequests