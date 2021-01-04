import React from "react";

import "./Note.css";

const NoteImage = React.memo((props) => {

  return (
    <div className="Note">
        <img className="Note-image" src={`${props.noteShown.imageUrl}`} alt="Note" />
    </div>
  );
})

export default NoteImage;