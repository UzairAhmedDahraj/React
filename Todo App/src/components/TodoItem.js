import '../styles/TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className='todo-item'>
            <span>{todo}</span>
            <button className='todo-delete-btn' onClick={onDelete}>Delete</button>
        </div>
    );
};
export default TodoItem;