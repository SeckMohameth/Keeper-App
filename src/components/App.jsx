import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


function App(props) {
  return (
    <div>
      <Header />
      {/* Mapping through the notes.js array in notes.js */}
      {/* // function being passed to the map function */}
     {notes.map((noteItem) => <Note 
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
    )}
      <Footer />
    </div>
  )
}

export default App;
