import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetchMovies";
import { IntersectionObserver } from "react-intersection-observer";

const Trending = () => {
    const router = useRouter();
    const category = router.query.category;

    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);

    useEffect(() => {
        const fetchData = async () => {
            const filteredResults = await fetchMovies({ action: category, page: 1 });
            setMovieList(filteredResults);
        }

        fetchData();
    }, [category]);

    const handlePageChange = async () => {
        setPageNum(pageNum + 1);

        const filteredResults = await fetchMovies({ action: category, page: pageNum });
        setMovieList([...movieList, ...filteredResults]);
    }

    return (

        <div className=" bg-black mt-6 h-screen">
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
            <div className="p-4">
                <button className="btn btn-small text-xs" onClick={handlePageChange}>More</button>
            </div>
            {/* <IntersectionObserver onChange={handleInView}>
                <div className="flex justify-center p-4"></div>
            </IntersectionObserver> */}
        </div>
    )
};

export default Trending;