import { useState } from 'react';

const Timer = (props) => {
    const [time, setTime] = useState(props.start);

    setTimeout(() => {
        if (time < 10) {
            setTime(time + 1);
        }
    }, 1000);

    return (
        <div>
            <h2>Timer: {time} sec.</h2>
        </div>
    )
}

export default Timer;