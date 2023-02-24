import { Book } from "./Book";

export const BookList = (props) => {

    return (
        <div>
            <h1 style={{ textDecoration: 'underline' }}>Book List</h1>
            <ol>
                {props.books.map((book, i) => <Book key={i} {...book} />)}
            </ol>
        </div>
    );
}