import { useState, useEfect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getRatedTopMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    }

    useEffect (() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getRatedTopMovies(topRatedUrl)
    }, [])

    return (
        <div> Home </div>
    )
}

export default Home