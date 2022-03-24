import React from "react";

function Note({ title, content, updateNotes, id }) {
  function deleteNote() {
    updateNotes(id);
  }
  return (
    <div contenteditable="true" className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={deleteNote}>
        <span className="material-icons">delete</span>
      </button>
    </div>
  );
}

export default Note;
