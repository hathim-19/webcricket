import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Web Cricket</h1>
      <div className="section-card">
        <p>
          Welcome to Web Cricket, where we bring the excitement of cricket to
          your fingertips. Our platform offers a unique virtual cricket
          experience that combines realistic simulations with engaging gameplay,
          designed for fans and players alike.
        </p>
      </div>
      <div className="section-card">
        <h2>Our Mission</h2>
        <p>
          At Web Cricket, our mission is to provide cricket enthusiasts with an
          immersive and enjoyable virtual experience. We aim to replicate the
          thrill of real cricket matches while introducing innovative features
          that elevate your gaming adventure.
        </p>
      </div>
      <div className="section-card">
        <h2>Key Features</h2>
        <ul>
          <li>Real-time matches powered by advanced simulation algorithms</li>
          <li>
            A variety of tournaments, from fast-paced T20s to classic test
            matches
          </li>
          <li>Detailed player statistics and performance analytics</li>
          <li>An intuitive and responsive user interface</li>
          <li>Global leaderboards to compete with players worldwide</li>
        </ul>
      </div>
      <div className="section-card">
        <h2>Our Technology</h2>
        <p>
          Web Cricket is built with cutting-edge technology to deliver smooth
          and realistic gameplay. Our proprietary simulation engine uses
          sophisticated algorithms to model player behaviors, match conditions,
          and outcomes, ensuring an authentic cricket experience.
        </p>
      </div>
      <div className="section-card">
        <h2>Our Team</h2>
        <p>
          Behind Web Cricket is a passionate team of cricket lovers and tech
          experts. We’re dedicated to blending our love for the sport with
          innovative solutions, working tirelessly to create the ultimate
          virtual cricket platform for you.
        </p>
      </div>
      <div className="section-card">
        <p>
          Join us at Web Cricket and dive into the future of virtual sports.
          Whether you’re a seasoned cricketer or a newcomer, there’s something
          exciting waiting for you!
        </p>
      </div>
    </div>
  );
};

export default About;
