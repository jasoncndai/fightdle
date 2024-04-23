import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MusicGuessContainer() {
  // Define the target music
  const targetMusic = "KEN'S THEME";

  // Define state for user's guess and feedback
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  // Function to handle user's guess
  const handleGuess = () => {
    if (guess.toUpperCase() === targetMusic) {
      setFeedback("Congratulations! You guessed it right!");
    } else {
      setFeedback("Sorry, wrong guess. Try again!");
    }
  };

  // Hook to get history object from React Router
  const history = useNavigate();

  // Function to navigate back to the main menu
  const goBackToMainMenu = () => {
    history("/"); // Navigate to the main menu
  };

  return (
    <div>
      <h1>Guess the Fighting Game Music</h1>
      <p>Guess the name of the fighting game music track:</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{feedback}</p>
      <button onClick={goBackToMainMenu}>Go Back to Main Menu</button>
    </div>
  );
}

export default MusicGuessContainer;
