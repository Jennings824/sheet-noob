import React from 'react';
import Note from "./Note.js"
import TextContainer from "./TextContainer.js"

function NoteContainer() {
  const notes = [
    ["C4", 99], 
    ["D4", 100], 
    ["E4", 101], 
    ["F4",102], 
    ["G4",103], 
    ["A4", 97], 
    ["B4", 98],
    ["A5", 97], 
    ["B5", 98],
  ]
  let noteShown = notes[Math.floor(Math.random() * notes.length)]
  let answerText = null;

  console.log(noteShown[0])

  const userInput = (e) => {
    let keyCode = e.keyCode
    if(keyCode === noteShown[1]) {
      console.log("You got it!!")
    } else {
    console.log("That's wrong...Dang! Try again.")
    }
  }

    document.addEventListener('keypress', userInput, false)


  return (
    <div className="NoteContainer">

      <h1>Use your keyboard to guss the Note below!</h1>
      
      <Note
        noteImage={noteShown[0]}
      />

      {answerText &&
      <TextContainer
        answerText={answerText}
      />
      }
    </div>
  );
}

export default NoteContainer;
