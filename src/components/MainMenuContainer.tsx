import React from "react";
import { Link } from "react-router-dom";

function MainMenuContainer() {
  return (
    <div className="main-menu-container">
      <h1>Fightdle</h1>
      <p>Guess Fighting Game Trivia</p>
      <div className="menu-options">
        <Link to="/character" className="menu-button">
          Guess Characters
        </Link>
        <div className="menu-divider"></div>
        <Link to="/stage" className="menu-button">
          Guess Stages
        </Link>
        <div className="menu-divider"></div>
        <Link to="/music" className="menu-button">
          Guess Music
        </Link>
        <div className="menu-divider"></div>
        <Link to="/move" className="menu-button">
          Guess Moves
        </Link>
      </div>
    </div>
  );
}

export default MainMenuContainer;
