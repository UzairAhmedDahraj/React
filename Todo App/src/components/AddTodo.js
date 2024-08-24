import { useState } from "react";
import '../styles/AddTodo.css';


const AddTodo = ({ onAdd }) => {
    const [input, setInput] = useState('');


    const handleSubmission = (e) => {
        e.PreventDefault();
        if (input.trim()) {
            onAdd(input);
            setInput('');
        }
    };

    return (
        <form className="todo-Form" onSubmit={handleSubmission}>
            <input className="todo-Input" type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task" />
            <button className="todo-Btn" type="submit">Add Task</button>
        </form>
    );

};

export default AddTodo;

