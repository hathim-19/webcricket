const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  player1Score: {
    type: Number,
    required: true,
  },
  player2Score: {
    type: Number,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Game", gameSchema);
