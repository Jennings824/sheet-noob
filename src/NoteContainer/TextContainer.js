import React from "react";

function TextContainer(props) {
    let text

    if(props.answerText) {
        text = <h1>You got it!</h1>
    } else {
        text = <h1>You Did not get it at all</h1>
    }

    return(
        <div className="TextContainer">
                {text}
        </div>
    )
}

export default TextContainer;