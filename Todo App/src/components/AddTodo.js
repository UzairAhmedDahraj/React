import { useState } from "react";
import '../styles/AddTodo.css';

const AddTodo = ({ onAdd }) => {
    const [input, setInput] = useState('');


    const handleSubmission = (e) => {
        e.preventDefault();
        if (input.trim() && input.length <= 36) {
            onAdd(input);
            setInput('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmission}>
            <input
                className="todo-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button
                className="add-todo-btn"
                type="submit"
                disabled={input.length > 36}
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTodo;
