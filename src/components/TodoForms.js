import React, { useState } from "react";

export default function TodoForms(props) {
  const [input, setinput] = useState("");
  //for changes to be reflected in the input field..
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  //on submit it will call the props addtodo function in todoform..asdf
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });
    setinput("");
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="add a todo"
        onChange={handleChange}
        className="todo-input"
        value={input}
        name="text"
      />
      <button type="submit" className="todo-btn" onClick={handleSubmit}>
        Add todo
      </button>
    </form>
  );
}
