import { useState, useEffect } from "react";

import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetchMovies";


const Main = () => {

    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);

    useEffect(() => {
        const fetchData = async () => {
            const filteredResults = await fetchMovies({action: 'Upcoming', page: 1});
            setMovieList(filteredResults);
        }
        
        fetchData();
    }, []);

    const handlePageChange = async () => {
        setPageNum(pageNum+1);
        
        const filteredResults = await fetchMovies({action: 'Upcoming', page: pageNum});
        setMovieList([...movieList, ...filteredResults]);
    }

    return (
   
        <div className=" bg-black mt-20">
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
                <button className="btn btn-small text-xs" onClick={handlePageChange}>More</button>
                </div>
        </div>
    )
};

export default Main;