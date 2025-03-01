const app = require("./src/app");
const connectDB = require("./src/config/db"); // Import DB connection

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
