// Modules & Imports | App Configurations
const express = require("express")
const userRoute = require("./routes/user_route")
const hostRoute = require("./routes/host_route")
const path = require("path")
const rootPath = require("./utils/root_directory")
const app = express()
const port = 3003

// Route Handling
app.use(express.static(path.join(rootPath, "public")))
app.use(express.urlencoded())
app.use(userRoute)
app.use("/host", hostRoute)
app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "404.html"))
})

// App Online
app.listen(port, () => {
  console.log(`success: connection established at link: http://localhost:${port}`)
})
