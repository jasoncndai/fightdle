import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainMenuContainer from "./components/MainMenuContainer";
import CharacterGuessContainer from "./components/CharacterGuessContainer";
import StageGuessContainer from "./components/StageGuessContainer";
import MusicGuessContainer from "./components/MusicGuessContainer";
import MoveGuessContainer from "./components/MoveGuessContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route exact path="/" component={MainMenuContainer} />
          <Route path="/character" component={CharacterGuessContainer} /> */}
          {/* Add routes for other pages here */}
          <Route path="/" element={<MainMenuContainer />} />
          <Route path="/character" element={<CharacterGuessContainer />} />
          <Route path="/stage" element={<StageGuessContainer />} />
          <Route path="/music" element={<MusicGuessContainer />} />
          <Route path="/move" element={<MoveGuessContainer />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
