import React, { useState } from "react";

import { notes } from '../notes.json'
import Button from "./Button.js";

import "./Note.css";
import NoteImage from "./NoteImage";

function NoteContainer() {

  const [noteShown, setNote] = useState(notes[0]);
  const standardNotes = ["C", "D", "E", "F", "G", "A", "B"]


  const compareNotes = (userNote) => {
    if (userNote === noteShown.standardNote) {
      console.log("Correct!")
      setNote(notes[Math.floor(Math.random() * notes.length)])
    } else {
      console.log("sorrryyyy nope")
    }
  }

  return (
    <div className="NoteContainer">
      <h1>Use the buttons to guess the Note below!</h1>
      <div className="Note">
        <NoteImage
          noteShown={noteShown}
        />
        <div className="ButtonContainer">
          {standardNotes.map((note) => 
            <Button
            key={note}
              note={note}
              noteShown={noteShown}
              compareNotes={compareNotes}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;