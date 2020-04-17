import React, { useState, useEffect } from "react";
import "./App.css";

import NoteContainer from "./NoteContainer/NoteContainer.js";

function App() {
  const [userReady, setUserReady] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Sheet n00b</p>
      </header>
      <h1 className="Intro">
        Hello, folks! This app is aimed at helping you 
        remember notes on sheet music.
      </h1>

      {!userReady && (
        <button className="Intro-button" onClick={() => setUserReady(true)}>
          Ready to Start?
        </button>
      )}

      {userReady && <NoteContainer />}
    </div>
  );
}

export default App;
