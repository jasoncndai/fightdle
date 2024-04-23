import React, { useState } from 'react';

function FightingGameGuess() {
  // Define the target character
  const targetCharacter = "RYU";

  // Define state for user's guess and feedback
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  // Function to handle user's guess
  const handleGuess = () => {
    if (guess.toUpperCase() === targetCharacter) {
      setFeedback("Congratulations! You guessed it right!");
    } else {
      setFeedback("Sorry, wrong guess. Try again!");
    }
  };

  return (
    <div>
      <h1>Guess the Fighting Game Character</h1>
      <p>Guess the name of the fighting game character (3 letters)</p>
      <input 
        type="text" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value.toUpperCase())} 
        maxLength={3}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{feedback}</p>
    </div>
  );
}

export default FightingGameGuess;