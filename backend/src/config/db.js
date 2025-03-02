//Connect to mongoDB
const mongoose = require("mongoose");
require("dotenv").config();

//Async connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully"); //Message for successful mongo connection
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error); //Message for failed mongo connection
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
