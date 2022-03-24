import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CreateArea({ onAdd }) {
  const [isClicked, setClick] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: ""
  });
  function onSubmit(event) {
    onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setClick(false);
    event.preventDefault();
  }

  function handleChange(event) {
    setClick(true);
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        id: uuid()
      };
    });
  }
  return (
    <div>
      <form>
        <input
          autoComplete="off"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={() => setClick(true)}
        />
        {isClicked && (
          <div>
            <textarea
              name="content"
              onBlur={onSubmit}
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="5"
            />
            <button style={{ fontSize: "150%" }} onClick={onSubmit}>
              +
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
