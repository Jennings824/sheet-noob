import React, { useState  } from 'react';
import './App.css';

import NoteContainer from './NoteContainer/NoteContainer.js'

function App() {
  const [userReady, setUserReady] = useState(false) 



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sheet n00b
        </p>
      </header>


      <h1 className="Intro">Hello, folks! Welcome to this app i decided to make since I stink at remembering notes on sheet music. Here's to learning!</h1>
      
      { !userReady &&
        <button className="Intro-button" onClick={() => setUserReady(true)}>Ready to Start Your Journey?</button>
      }

      {userReady &&
        <NoteContainer/>
      }
    </div>
  );
}

export default App;
