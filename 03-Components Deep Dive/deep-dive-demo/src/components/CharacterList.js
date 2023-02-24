import { useEffect, useState } from "react";


export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(result => {
                setCharacters(result.results);
            });
    }, [])


    return (
        <div>
            <h1 style={{ textDecoration: 'underline' }}>Star Wars Characters</h1>
            <ul>
                {!characters.map && <li>Loading...</li>}
                {characters.map(x => (
                    <li key={x.name}>{x.name}</li>
                ))}
            </ul>
        </div>
    );
}