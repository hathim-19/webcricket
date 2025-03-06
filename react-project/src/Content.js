import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="cricket-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title"> Rule the Digital Cricket World</h1>
          <p className="hero-subtitle">
            Experience Unreal 4K Realism Where Every Shot Redefines Glory
          </p>
          <div className="cta-group">
            <button className="cta-button pulse">Launch Your Journey</button>
            <button className="cta-button-outline glow">
              See It In Action
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <h2 className="section-title animate-title">Cricket, Reimagined</h2>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <img
              src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Epic Batting"
              className="feature-image"
            />
            <div className="feature-content">
              <h3>⚡ Blitz Mode</h3>
              <p>
                Explosive T10 action with 150+ jaw-dropping ball animations and
                roaring crowd vibes.
              </p>
              <ul className="feature-list">
                <li>• Nail-biting Super Overs</li>
                <li>• Tactical Powerplays</li>
                <li>• High-stakes Death Overs</li>
              </ul>
              <button className="feature-cta">Explore Now</button>
            </div>
          </div>

          <div className="feature-card fade-in">
            <img
              src="https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Legendary Grounds"
              className="feature-image"
            />
            <div className="feature-content">
              <h3>🏟️ Epic Arenas</h3>
              <p>
                Conquer 22 iconic stadiums with real-time pitch physics and
                unpredictable weather.
              </p>
              <div className="stadium-stats">
                <div className="stat-badge bounce">
                  <span>MCG</span>
                  <span>132m Boundaries</span>
                </div>
                 
                <div className="stat-badge bounce">
                  <span>Lord's</span>
                  <span>Sloping Drama</span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1603302576680-df310f1bbce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cricket Thrill"
                className="additional-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Multiplayer */}
      <section className="multiplayer-section">
        <div className="section-content">
          <h2 className="animate-title">Clash with the World</h2>
          <div className="match-types">
            <div className="match-card hover-scale">
              <div className="match-icon pulse">🎮</div>
              <h4>Instant Clash</h4>
              <p>Dive into thrilling 1v1 showdowns</p>
              <span className="online-count glow-text">12K+ Warriors</span>
            </div>
            <div className="match-card hover-scale">
              <div className="match-icon pulse">🏆</div>
              <h4>Elite Leagues</h4>
              <p>Dominate ranked seasons</p>
              <span className="rating-label glow-text">ELO Mastery</span>
            </div>
            <div className="match-card hover-scale">
              <div className="match-icon pulse">👨👩👧👦</div>
              <h4>Clan Glory</h4>
              <p>Lead 11v11 epic battles</p>
              <span className="team-count glow-text">8.4K Squads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Player Progression */}
      <section className="progression-section">
        <h2 className="animate-title">Forge Your Cricket Destiny</h2>
        <div className="progress-steps">
          <div className="progress-card slide-in">
            <span className="step-number glow">1</span>
            <h3>Shape Your Star</h3>
            <p>Tweak 50+ unique traits</p>
          </div>
          <div className="progress-arrow">➔</div>
          <div className="progress-card slide-in">
            <span className="step-number glow">2</span>
            <h3>Unleash Power</h3>
            <p>Master 150+ elite skills</p>
          </div>
          <div className="progress-arrow">➔</div>
          <div className="progress-card slide-in">
            <span className="step-number glow">3</span>
            <h3>Claim Stardom</h3>
            <p>Shine in the IPL Auction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
