const mongoose = require("mongoose")
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION)
    // console.log("MongoDB connection successful")
  }
  catch (error) {
    console.error("Error: Failed to connect to the MongoDB", error)
    process.exit(1)
  }
}


module.exports = dbConnection