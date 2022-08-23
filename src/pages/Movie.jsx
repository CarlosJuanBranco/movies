import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkFill
} from "react-icons/bs";

import MovieCard from '../components/MovieCard';

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;

        getMovie(movieUrl);
    }, []);

    const formatedCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    };

    return <div>{movie &&
        <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>

            <div className="info">
                <BsWallet2 /> Orçamento:
            </div>
            <p> {formatedCurrency(movie.budget)}</p>

            <div className="info">
                <h3>
                    <BsGraphUp /> Receita:
                </h3>
                <p>{formatedCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>

            <div className="info description ">
                <h3>
                    <BsFillFileEarmarkFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
            </div>
        </>
    }
    </div>;
};

export default Movie