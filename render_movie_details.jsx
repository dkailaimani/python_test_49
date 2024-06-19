import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Harriet the Spy', genre: 'Drama', description: 'Follows 11-year-old Harriet M. Welsch, an aspiring writer whose life turns upside down when her classmates discover her brutally honest observations about them in a secret notebook.' },
        { id: 2, title: 'Spiderman', genre: 'Sci-Fi', description: 'Chronicles the transformation of high school student Peter Parker into the iconic web-slinging superhero after being bitten by a genetically-modified spider.' },
        { id: 3, title: 'Hidden Figures', genre: 'Biography', description: 'Three brilliant African-American women mathematicians played pivotal roles in NASA during the early years of the U.S. space program.' }
    ]);

    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = id => {
        setShowDetails(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id} onClick={() => toggleDetails(movie.id)}>
                        {movie.title}
                        {showDetails[movie.id] && (
                            <p>{movie.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
