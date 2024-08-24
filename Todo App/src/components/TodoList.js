import React from 'react';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
            ))}
        </div>
    );
};

export default TodoList;
