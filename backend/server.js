const app = require("./src/app"); //connect to app.js
const connectDB = require("./src/config/db"); // Import DB connection

const PORT = process.env.PORT || 5000; //Set server port

// Connect to MongoDB
connectDB();

//listen for port connection and announce connection from frontend
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`); //Announce port number connection
  console.log("✅ Waiting for frontend connection...");
});

// Log requests from frontend
app.use((req, res, next) => {
  console.log(`📡 Frontend connected: ${req.method} ${req.url}`);
  next();
});