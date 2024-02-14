import React, { useState } from "react";

import { notes } from '../notes.json'
import Button from "./Button.js";

import "./Note.css";
import NoteImage from "./NoteImage";

const NoteContainer = ({setUserScore}) => {

  const [noteShown, setNoteShown] = useState(notes[0]);
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const standardNotes = ["C", "D", "E", "F", "G", "A", "B"]

  const selectNewNote = () => {
    setNoteShown(notes[Math.floor(Math.random() * notes.length)])
  }

  const compareNotes = (userNote) => {
    if (userNote === noteShown.standardNote) {
      setFeedbackMessage('Correct! Well done')
      setUserScore(prevScore => prevScore + 1)
      setCurrentStreak((prevStreak) => {
          const newStreak = prevStreak +1;
          if(newStreak > longestStreak) {
            setLongestStreak(newStreak)
          }
          return newStreak
      })
      selectNewNote()
    } else {
      setFeedbackMessage('EHHH Wrong!')
      setUserScore(prevScore => prevScore - 1)
      setCurrentStreak(0)
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
      <h1>{feedbackMessage}</h1>
      <h1>Currennt Streak: {currentStreak}</h1>
      <h1>Longest Streak: {longestStreak}</h1>
    </div>
  );
}

export default NoteContainer;