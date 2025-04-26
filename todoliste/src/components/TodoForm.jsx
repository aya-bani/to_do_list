import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "General",
    priority: "Medium",
  });

  function handleChange(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.title.trim() === "") return;

    onSubmit(newItem);
    setNewItem({
      title: "",
      description: "",
      dueDate: "",
      category: "General",
      priority: "Medium",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          className="inp"
          name="title"
          value={newItem.title}
          onChange={handleChange}
          placeholder="Task Title"
          type="text"
        />
        <textarea
          className="inp"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <input
          className="inp"
          name="dueDate"
          value={newItem.dueDate}
          onChange={handleChange}
          type="date"
        />
        <select
          className="inp"
          name="category"
          value={newItem.category}
          onChange={handleChange}
        >
          <option>General</option>
          <option>Math</option>
          <option>History</option>
          <option>Science</option>
          <option>Languages</option>
        </select>
        <select
          className="inp"
          name="priority"
          value={newItem.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button className="btn">Add Task</button>
      </div>
    </form>
  );
}
