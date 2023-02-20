var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header',
//     { className: 'site-header' },
//     React.createElement('h1', {}, 'Hello from React!!')
// );

var reactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello from JSX!'
    ),
    React.createElement(
        'h1',
        null,
        'React slogan'
    )
);

root.render(reactElement);