import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSignIN = () => {
    navigate("/login");
  };
  const handleSignUP = () => {
    navigate("/register");
  };
  return (
    <div className="home-container">
      <h1>The ultimate cricket experience</h1>
      <h2>Welcome to Web Cricket!</h2>
      {/* <p>
        Your ultimate destination for all things cricket. Stay updated with live
        scores, match highlights, player stats, and expert analyses. Join our
        community to connect with fellow cricket enthusiasts and never miss a
        moment of the action!
      </p> */}
      <ul className="features-list">
        <li>Live scores updated in real-time</li>
        <li>Highlights from recent matches</li>
        <li>Detailed player statistics</li>
        <li>Expert analyses and commentary</li>
        <li>Community forums to discuss with other fans</li>
      </ul>
      <div className="button-group">
        <button className="home-button" onClick={handleSignIN}>
          Sign In
        </button>
        <button className="home-button" onClick={handleSignUP}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Home;
