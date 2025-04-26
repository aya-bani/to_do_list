import { TodoItem } from "./TodoItem";

export function TodoList({ todos, setTodos }) {
  function handleToggle(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={() => handleToggle(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </ul>
  );
}
