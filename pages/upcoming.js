import { useState } from "react";
import MovieCard from "@/components/MovieCard";

const Upcoming = ({ movies }) => {

    const [movieList, setMovieList] = useState(movies);
    console.log(movieList);

    // const filteredMovies = movies.filter(movie => {
    //     if (movie.original_language === "en") {
    //         return movie;
    //     };
    // });

    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 py-8 bg-black">
            {movies.map((movie) => {
                return (
                    <MovieCard key={movie.id} movie={movie}/>
                )
            })}
        </div>
    )
};

export const getServerSideProps = async ({ req, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=5'
    )

    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&page=1`);
    const data = await response.json();
    return {
        props: {
            movies: data.results,
        },
    };
};

export default Upcoming;