import React from "react";
// Images
import C4 from '../images/C4.jpg'
import TrebleA5 from '../images/TrebleA5.png'

import './Note.css'

function Note(props) {

    let imageObject = {
        "A4": TrebleA5,
        "B4": C4,
        "C4": C4,
        "D4": C4,
        "E4": C4,
        "F4": C4,
        "G4": C4,
        "A5": TrebleA5,
        "B5": TrebleA5
    }

    return(
        <div className="Note">
            <img className="Note-image" src={imageObject[props.noteImage]} alt="Note"/>
        </div>
    )
}

export default Note;