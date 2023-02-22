import logo from './logo.svg';
import Header from './components/Header';
import BookList from './components/BookList';
import Timer from './components/Timer';
import Clicker from './components/Clicker';
import Counter from './components/Counter';
import './App.css';

function App() {
    const books = [
        {
            "title": "Eloquent JavaScript, Third Edition",
            "author": "Marijn Haverbeke",
            "published": 2018,
            "publisher": "No Starch Press",
            "pages": 472,
            "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        },
        {
            "title": "Practical Modern JavaScript",
            "author": "Nicolás Bevacqua",
            "published": 2017,
            "publisher": "O'Reilly Media",
            "pages": 334,
            "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        },
        {
            "title": "Understanding ECMAScript 6",
            "author": "Nicholas C. Zakas",
            "published": 2016,
            "publisher": "No Starch Press",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        },
        {
            "title": "Speaking JavaScript",
            "author": "Axel Rauschmayer",
            "published": 2014,
            "publisher": "O'Reilly Media",
            "pages": 460,
            "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        },
        {
            "title": "Learning JavaScript Design Patterns",
            "author": "Addy Osmani",
            "published": 2012,
            "publisher": "O'Reilly Media",
            "pages": 254,
            "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        },
    ]

    return (
        <div className="App">
            <header className="App-header">
                <Header>Library</Header>

                <Counter />

                <Clicker />

                <Timer start={1} />

                <BookList books={books} />

                <img src={logo} className="App-logo" />
            </header>
        </div>
    );
}

export default App;
