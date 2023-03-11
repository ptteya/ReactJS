import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const StarshipList = () => {
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        fetch(`https://swapi.dev/api/starships`)
            .then(res => res.json())
            .then(result => {
                setStarships(result.results);
            })
    }, []);

    return (
        <>
            <h2>Starships</h2>
            <ul>
                {starships.map((x, i) => <li key={x.name} > <Link to={`/starships/${x.url.split('/').slice(-2, -1)[0]}`} >{x.name}</Link></li>)
                }
            </ul >
        </>
    )
}

export default StarshipList;