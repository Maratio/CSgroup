import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/reducers/tasksSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    const id = new Date().getTime();
    const createdAt = new Date();
    dispatch(addTask({ id, title, description, priority, createdAt }));
  };


  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="">Select priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleSubmit} type="submit">
        Add task
      </button>
    </form>
  );
};

export default Form;
