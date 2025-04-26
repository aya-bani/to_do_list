export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-main">
        <div className="todo-label">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
        </div>

        <div className="todo-meta">
          {/* Example: Showing Created Date */}
          <small className="todo-date">{todo.date}</small>

          {/* Future Option: Edit button can be here */}
          {/* <button className="edit-btn">Edit</button> */}

          <button onClick={onDelete} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
