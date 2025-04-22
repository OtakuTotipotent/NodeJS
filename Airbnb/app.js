// Modules & Imports
const express = require("express")
const path = require("path")
const userRoute = require("./routes/user_route")
const hostRoute = require("./routes/host_route")
const rootPath = require("./utils/path_utility")

// Connection Configurations
const app = express()
const port = 3003

// Request Decoding
app.use(express.urlencoded())

// Route Handling
app.use(userRoute)
app.use("/host", hostRoute)

app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "404.html"))
})

// App Online
app.listen(port, () => {
  console.log(`success: connection established at link: http://localhost:${port}`)
})
