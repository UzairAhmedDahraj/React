import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
