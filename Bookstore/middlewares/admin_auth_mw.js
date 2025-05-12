

const isUserAdmin = (req, res, next) => {
  if (req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied! Admin Rights are Required..."
    })
  }

  next() // if the user is an admin
}

module.exports = isUserAdmin