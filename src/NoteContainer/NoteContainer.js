import React, { useState, useEffect } from "react";
import C4 from "../images/C4.png";
import D4 from "../images/D4.png";
import E4 from "../images/E4.png";
import F4 from "../images/F4.png";
import G4 from "../images/G4.png";
import A5 from "../images/A5.png";
import B5 from "../images/B5.png";
import C5 from "../images/C5.png";
import D5 from "../images/D5.png";
import E5 from "../images/E5.png";
import F5 from "../images/F5.png";
import G5 from "../images/G5.png";
import "./Note.css";

function NoteContainer() {
  const notes = [
    ["C4", 99],
    ["D4", 100],
    ["E4", 101],
    ["F4", 102],
    ["G4", 103],
    ["A5", 97],
    ["B5", 98],
    ["C5", 99],
    ["D5", 100],
    ["E5", 101],
    ["F5", 102],
    ["G5", 103],
  ];
  let imageObject = {
    C4: C4,
    D4: D4,
    E4: E4,
    F4: F4,
    G4: G4,
    A5: A5,
    B5: B5,
    C5: C5,
    D5: D5,
    E5: E5,
    F5: F5,
    G5: G5,
  };

  const [noteShown, setNote] = useState(
    notes[Math.floor(Math.random() * notes.length)]
  );

  useEffect(() => {
    console.log(noteShown);
  }, [noteShown]);

  const userInput = (e) => {
    let keyCode = e.keyCode;
    if (keyCode === noteShown[1]) {
      console.log("You got it!!");
      setNote(notes[Math.floor(Math.random() * notes.length)]);
    } else {
      console.log("That's wrong...Dang! Try again.");
    }
  };

  document.addEventListener("keypress", userInput, false);

  return (
    <div className="NoteContainer">
      <h1>Use your keyboard to guss the Note below!</h1>
      <div className="Note">
        <img className="Note-image" src={imageObject[noteShown[0]]} alt="Note" />
      </div>
    </div>
  );
}

export default NoteContainer;
