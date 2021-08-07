import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function updateNotes(id) {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  }
  function addItem(note) {
    if (note.title !== "" || note.content !== "") {
      setNotes((prevNote) => {
        return [...prevNote, note];
      });
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => {
        return (
          <Note
            updateNotes={updateNotes}
            key={note.id}
            title={note.title}
            content={note.content}
            id={note.id}
          />
        );
      })}

      {/* <Note key={1} title={'title'} content={'content'} /> */}
      <Footer />
    </div>
  );
}

export default App;
