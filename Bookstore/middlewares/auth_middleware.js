const jwt = require("jsonwebtoken")

const userIdentification = (req, res, next) => {

  const auth_header = req.headers["authorization"]
  const auth_token = auth_header && auth_header.split(" ")[1]
  if (!auth_token) {
    return res.status(401).json({
      success: false,
      message: "Access denied..."
    })
  }

  // cookie generation
  try {
    const user_info = jwt.verify(auth_token, process.env.JWT_SECRET_KEY)
    req.userInfo = user_info
    next()

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Access Denied...",
      data: error
    })
  }
}


module.exports = userIdentification