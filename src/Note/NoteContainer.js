import React, { useState, useEffect } from "react";

import { notes } from '../notes.json'

import "./Note.css";

function NoteContainer() {

  const [noteShown, setNote] = useState(notes[0]);
  const [isCorrect, assignAnswer] = useState(false);

  useEffect(() => {
    console.log(noteShown);
  }, [noteShown]);

  useEffect(() => {
    isCorrect &&
      console.log("Yea")
      setNote(notes[Math.floor(Math.random() * notes.length)])
      assignAnswer(false)
  }, [isCorrect]);

  const userInput = (e) => {
    let keyCode = e.keyCode;
    if (keyCode === noteShown.keyCode) {
      assignAnswer(true)
    } else {
      assignAnswer(false)
    }
  };

  document.addEventListener("keypress", userInput, false);

  return (
    <div className="NoteContainer">
      <h1>Use your keyboard to guss the Note below!</h1>
      <div className="Note">
        <img className="Note-image" src={`${noteShown.imageUrl}`} alt="Note" />
      </div>
    </div>
  );
}

export default NoteContainer;