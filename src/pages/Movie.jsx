import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

import { FaStar } from 'react-icons/fa';

import './MoviesGrid.css';

const Movie = () => {
    return (
        <div>
            <MovieCard />
            <FaStar />
        </div>
    )
}

export default Movie