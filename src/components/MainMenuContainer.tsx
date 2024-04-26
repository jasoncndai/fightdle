import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenuContainer.css";

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
        {/* <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/character")}
        >
          Guess Characters
        </button>
        <div className="menu-divider"></div>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/stage")}
        >
          Guess Stages
        </button>
        <div className="menu-divider"></div>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/music")}
        >
          Guess Music
        </button>
        <div className="menu-divider"></div>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/move")}
        >
          Guess Moves
        </button> */}
      </div>
    </div>
  );
}

export default MainMenuContainer;
