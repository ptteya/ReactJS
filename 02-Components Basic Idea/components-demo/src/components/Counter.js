import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.start || 0);

    const increaseHandler = () => {
        setCount(oldCount => oldCount + 1);
    };

    const decreaseHandler = () => {
        setCount(oldCount => oldCount - 1);
    };

    const clearHandler = () => {
        setCount(0);
    };

    let title = '';

    if (count < 10) {
        title = 'Counter';
    } else if (count < 20) {
        title = 'Turbo Counter';
    } else if (count < 30) {
        title = 'Mega Counter';
    } else if (count < 40) {
        title = 'Giga Counter';
    } else {
        title = 'Counter'
    }

    return (
        <div>
            <h1 style={{ fontSize: 16 + count + 'px' }}>{title}</h1>
            <h2>{count}</h2>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearHandler}>Clear</button>
            <button onClick={increaseHandler}>+</button>
        </div>
    )
}

export default Counter;