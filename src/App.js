import React, { useState } from "react";
import "./App.css";

import NoteContainer from "./Note/NoteContainer.js";

function App() {
  const [userReady, setUserReady] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Sheet n00b</p>
      </header>

      {!userReady && (
        <>
        <h1 className="Intro">
          Hello, folks! This app is aimed at helping you 
          remember notes on sheet music.
        </h1>
        <button className="Intro-button" onClick={() => setUserReady(true)}>
          Ready to Start?
        </button>
        </>
      )}

      {userReady && <NoteContainer />}
    </div>
  );
}

export default App;
