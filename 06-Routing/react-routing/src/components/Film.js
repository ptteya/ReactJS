import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Film = ({
    films
}) => {
    const { filmId } = useParams();
    const [film, setFilm] = useState({});

    useEffect(() => {
        if (films.length > 0) {
            fetch(films[Number(filmId) - 1])
                .then(res => res.json())
                .then(result => {
                    setFilm(result);
                })
        }
    }, [films, filmId])

    return <h3>{film.title}</h3>
}

export default Film;