const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// users authentication for REGISTRATION
const userRegistration = async (req, res) => {
 try {
  const { username, email, password, role } = req.body
  const existedUser = await User.findOne({ $or: [{ username }, { email }] })
  if (existedUser) {
   res.status(400).json({
    success: false,
    message: "User already exists with same email/username..."
   })
  } else {
   const salt = await bcrypt.genSalt()
   const securePassword = await bcrypt.hash(password, salt)
   const newUser = new User({
    username, email, password: securePassword, role: role || "user"
   })

   await newUser.save()
   if (newUser) {
    res.status(201).json({
     success: true,
     message: "User added successfully..."
    })
   } else {
    res.status(400).json({
     success: false,
     message: "Failed to add user..."
    })
   }
  }

 } catch (error) {
  console.log(error);
  res.status(500).json({
   success: false,
   message: "User authentication failed..."
  })
 }
}


// users authentication for LOGIN
const userLogin = async (req, res) => {
 try {
  const { username, password } = req.body
  const existedUser = await User.findOne({ username })
  if (!existedUser) {
   return res.status(400).json({
    success: false,
    message: "User not found. Invalid Credentials..."
   })
  }

  const authorization = await bcrypt.compare(password, existedUser.password)
  if (!authorization) {
   return res.status(400).json({
    success: false,
    message: "User not found. Invalid Credentials..."
   })
  }

  const userToken = jwt.sign({
   userId: existedUser._id,
   username: existedUser.username,
   role: existedUser.role
  }, process.env.JWT_SECRET_KEY, { expiresIn: '30m' })

  res.status(200).json({
   success: true,
   message: "Login successful...",
   userToken
  })

 } catch (error) {
  console.log(error);
  res.status(500).json({
   success: false,
   message: "User authentication failed..."
  })
 }
}

module.exports = { userRegistration, userLogin }