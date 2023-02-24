import { useState, useEffect } from "react";
import styles from './Book.module.css';

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

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
        setDeleted(state => !state);
    }

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue';
    }

    if (deleted) {
        return <h2>Deleted</h2>
    }

    return (
        <li style={style} className={styles['book-item']}>
            <article>
                <h2 className={styles.title}>{props.title}</h2>
                <div>Book Author: {props.author}</div>
                <div>Published: {props.published}</div>
                <div>Pages: {props.pages}</div>
                <footer>
                    <button onClick={clickHandler} className={styles['highlight-button']}>Highlight</button>
                    <button onClick={deleteHandler} className={styles['delete-button']}>Delete</button>
                </footer>
            </article>
        </li>
    );
}