import React from 'react'

const Button = ({note, compareNotes}) => {

    return (
        <>
        <div className="button" onClick={() => compareNotes(note)}>
            {note}
        </div>
        </>
    );
}

export default Button
