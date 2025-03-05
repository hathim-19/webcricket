const Game = require("../models/gameModel");

const saveGameResult = async (req, res) => {
  const { player1Score, player2Score, winner } = req.body;
  const userId = req.userId; // Set by auth middleware
  console.log("Saving game:", { userId, player1Score, player2Score, winner }); // Debug log

  try {
    const game = new Game({
      userId,
      player1Score,
      player2Score,
      winner,
    });

    await game.save();
    res.status(201).json({ message: "Game result saved" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveGameResult };
