import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./game.css";
import axios from "axios";

const GameComponents = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [lastPlayed, setLastPlayed] = useState(0);
  const [currentP1, setCurrentP1] = useState(0);
  const [currentP2, setCurrentP2] = useState(0);
  const [winner, setWinner] = useState("");
  const navigate = useNavigate();

  const runsArray = [0, 1, 2, 3, 4, 6];
  const totalNumber = runsArray.length - 1;

  useEffect(() => {
    // Retrieve username from localStorage for Player 1
    const username = localStorage.getItem("username");
    console.log("Retrieved username from localStorage:", username);

    if (username && username !== "undefined" && username.trim() !== "") {
      setPlayer1Name(username);
    } else {
      console.warn("No valid username found, redirecting to login");
      navigate("/login");
    }

    // Generate random name for Player 2
    const randomNames = ["Bot1", "Bot2", "Bot3", "Bot4", "Bot5"];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setPlayer2Name(randomNames[randomIndex]);
  }, [navigate]);

  function handlePlayer1Score() {
    if (lastPlayed === 1 || winner) return;

    let randomIndex = Math.round(Math.random() * totalNumber);
    let run = runsArray[randomIndex];

    setPlayer1Score((prev) => {
      const newScore = prev + run;
      setLastPlayed(1);
      setCurrentP1(run);

      if (newScore >= 20 && player2Score < 20) {
        setWinner(`${player1Name} Wins!`);
      } else if (newScore >= 20 && player2Score >= 20) {
        setWinner("It's a Draw!");
      }
      return newScore;
    });
  }

  function handlePlayer2Score() {
    if (lastPlayed === 2 || winner) return;

    let randomIndex = Math.round(Math.random() * totalNumber);
    let run = runsArray[randomIndex];

    setPlayer2Score((prev) => {
      const newScore = prev + run;
      setLastPlayed(2);
      setCurrentP2(run);

      if (newScore >= 20 && player1Score < 20) {
        setWinner(`${player2Name} Wins!`);
      } else if (newScore >= 20 && player1Score >= 20) {
        setWinner("It's a Draw!");
      }
      return newScore;
    });
  }

  useEffect(() => {
    if (winner) {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .post(
            "http://localhost:5000/api/games",
            { player1Score, player2Score, winner },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(() => console.log("Game result saved"))
          .catch((err) => console.error("Error saving game:", err));
      }
    }
  }, [winner, player1Score, player2Score]);

  return (
    <div className="player-container">
      {/* Player 1 */}
      <div className="player">
        <button
          onClick={handlePlayer1Score}
          disabled={lastPlayed === 1 || winner}
          className="player-button p1"
        >
          <span className="player-name">{player1Name}</span>
          <span className="score-display">{currentP1}</span>
        </button>
      </div>

      {/* Middle Section - Score and Winner Display*/}
      <div className="latest-run-display">
        {!winner && (
          <div className="current-runs">
            <span className="run-p1">{player1Score}</span>
            <span className="divider">-</span>
            <span className="run-p2">{player2Score}</span>
          </div>
        )}

        <div className="status-text">
          {winner ? (
            <>
              <strong className="winner-message">{winner}</strong>
              <div className="total-score">
                Winner Total Score:{" "}
                {winner.includes(player1Name)
                  ? player1Score
                  : winner.includes(player2Name)
                  ? player2Score
                  : `${player1Score} - ${player2Score}`}
              </div>
            </>
          ) : (
            "Total Score"
          )}
        </div>
      </div>

      {/* Player 2 */}
      <div className="player">
        <button
          onClick={handlePlayer2Score}
          disabled={lastPlayed === 2 || winner}
          className="player-button p2"
        >
          <span className="player-name">{player2Name}</span>
          <span className="score-display">{currentP2}</span>
        </button>
      </div>
    </div>
  );
};

export default GameComponents;
