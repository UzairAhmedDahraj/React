import { useState } from "react";
import Button from './Button';
import '../styles/Counter.css'

const Counter = () => {
    let [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <div className="counter">
            <div className="display">
                <div>Counter: {count}</div>
            </div>
            <div className="buttons">
                <Button name='Increment' onClick={Increment}/> 
                <Button name='Decrement' onClick={Decrement}/> 
                <Button name='Reset' onClick={Reset}/> 
            </div>
        </div>
    )
};

export default Counter;