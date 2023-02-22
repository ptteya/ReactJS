const Book = (props) => {
    return (
        <li>
            <article>
                <h2>{props.title}</h2>
                <div>Book Author: {props.author}</div>
                <div>Published: {props.published}</div>
                <div>Pages: {props.pages}</div>
            </article>
        </li>
    );
}

export default Book;