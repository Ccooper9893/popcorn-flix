import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetchMovies";

const GenreCategory = () => {

    const [movieList, setMovieList] = useState([]);
    const [pageNum, setPageNum] = useState(2);
    const [loading, setLoading] = useState(true);

    //Grab category ID from url
    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        const fetchData = async () => {
            const filteredResults = await fetchMovies({ action: 'Category', page: 1, id });
            setMovieList(filteredResults);
            setLoading(false);
        }

        fetchData();
    }, [id]);

    const handlePageChange = async () => {
        setPageNum(pageNum + 1);

        const filteredResults = await fetchMovies({ action: 'Category', page: pageNum, id: id });
        setMovieList([...movieList, ...filteredResults]);
    }

    return (
        <div className=" bg-black mt-6">
            {loading
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

}

export default GenreCategory;