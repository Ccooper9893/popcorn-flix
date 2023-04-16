import { useState, useEffect } from "react";

import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetch/movies/fetchMovies";

const HomePage = () => {

    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);

    useEffect(() => {
        const fetchData = async () => {
            const filteredResults = await fetchMovies({action: 'latest', page: 1});
            setMovieList(filteredResults);
        }
        
        fetchData();
    }, []);

    const handlePageChange = async () => {
        setPageNum(pageNum+1);
        
        const filteredResults = await fetchMovies({action: 'latest', page: pageNum});
        setMovieList([...movieList, ...filteredResults]);
    }

    return (
   
        <div className=" bg-black mt-6">
            {!movieList
                ? (<h1>Loading...</h1>)
                : (

                    <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4">
                        {movieList.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}

                    </div>

                )}
                <div className="flex justify-center p-4">
                <button className="btn btn-small text-xs" onClick={handlePageChange}>More</button>
                </div>
        </div>
    )
};

export default HomePage;