const express = require("express")
const router = express.Router()
const userAuth = require("../middlewares/auth_middleware")
const adminAuth = require("../middlewares/admin_auth_mw")

router.get("/admin", userAuth, adminAuth, (req, res) => {
  res.send("<h2 style='text-align:center; color:purple; font-family:poppins;'>Welcome, Admin!</h2>")
})

module.exports = router