import { useState, useEffect } from "react";

import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetchMovies";

const Upcoming = () => {

    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovies({action: 'Upcoming', page: 1});
            setMovieList(data.results);
        }
        
        fetchData();
    }, []);

    const handlePageChange = async () => {
        setPageNum(pageNum+1);
        
        const data = await fetchMovies({action: 'Upcoming', page: pageNum});
        setMovieList([...movieList, ...data.results]);
    }

    return (
        <div className=" bg-black">
            {!movieList
                ? (<h1>Loading...</h1>)
                : (

                    <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4 lg:py-6">
                        {movieList.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}

                    </div>

                )}
                <div className="flex justify-center p-4">
                <button className="btn glass btn-wide" onClick={handlePageChange}>Load More</button>
                </div>
        </div>
    )
};

export default Upcoming;