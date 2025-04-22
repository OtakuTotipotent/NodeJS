// Modules & Imports
const express = require("express")
const rootPath = require("./utils/path_utility")
const path = require("path")
const router = require("./routes/routes")

// Configurations
const app = express()
const port = 3003

// Request Decoding
app.use(express.urlencoded())

// Route Handling
app.use(router)
app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "404.html"))
})

// App Online
app.listen(port, () => {
  console.log(`success: server connected to 'http://localhost:${port}'`)
})