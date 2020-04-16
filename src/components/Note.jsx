import React from "react"

    //Note compoent with props
function Note(props){
    return(
        <div className="note"> 
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;