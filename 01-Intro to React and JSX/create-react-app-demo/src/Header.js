import logo from './logo.svg';

export const Header = (props) => {
    return (
        <header className="App-header">
            <p>{props.text}</p>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}