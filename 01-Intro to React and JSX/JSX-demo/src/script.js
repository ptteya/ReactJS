const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header',
//     { className: 'site-header' },
//     React.createElement('h1', {}, 'Hello from React!!')
// );

const reactElement = (
    <header>
        <h1>Hello from JSX!</h1>
        <h1>React slogan</h1>
    </header>
);

root.render(reactElement);