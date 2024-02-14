import React, { useState } from "react";
import "./App.css";

import NoteContainer from "./Note/NoteContainer.js";

function App() {
  // const [userReady, setUserReady] = useState(false);
  const [userScore, setUserScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Sheet n00b</p>
      </header>

      <div className='interaction-panel'>
        <NoteContainer
          setUserScore={setUserScore}
        />
        <div className='score'>
          <h1>Your Score:</h1>
          <h2 className='actual-score'>{userScore}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
