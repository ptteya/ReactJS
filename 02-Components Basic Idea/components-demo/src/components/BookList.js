import Book from "./Book";

const BookList = (props) => {
    return (
        <ul>
            <Book
                title={props.books[0].title}
                author={props.books[0].author}
                published={props.books[0].published}
                pages={props.books[0].pages}
            />
            <Book
                title={props.books[1].title}
                author={props.books[1].author}
                published={props.books[1].published}
                pages={props.books[1].pages}
            />
            <Book
                title={props.books[2].title}
                author={props.books[2].author}
                published={props.books[2].published}
                pages={props.books[2].pages}
            />
        </ul>
    );
}

export default BookList;