import { useState, useEffect } from "react";

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        console.log('Mounting' + props.title);
    }, []);

    useEffect(() => {
        console.log('Updated' + props.title);
    }, [highlighted]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    }

    const deleteHandler = () => {
        setMarked(state => !state);
    }

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue';
    }

    if (marked) {
        style.backgroundColor = 'red';
    }

    return (
        <li style={style}>
            <article>
                <h2>{props.title}</h2>
                <div>Book Author: {props.author}</div>
                <div>Published: {props.published}</div>
                <div>Pages: {props.pages}</div>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                </footer>
            </article>
        </li>
    );
}