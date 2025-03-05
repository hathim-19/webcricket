const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const gameRoutes = require("./routes/gameRoutes");
const cors = require("cors"); // Connect frontend and backend
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // Enable CORS for frontend (e.g., port 3000)
app.use(express.json()); // Parse JSON bodies

app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
