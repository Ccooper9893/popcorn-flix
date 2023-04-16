import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetch/movies/fetchMovies";
import emptyBucket from "../../../public/emptyBucket.webp";
import Image from "next/image";

const Trending = () => {
    const router = useRouter();
    const category = router.query.category;
    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);
    const [error, setError] = useState(false);
    const [button, setButton] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (category !== undefined) {
                const filteredResults = await fetchMovies({ action: category, page: 1 });
                filteredResults && setMovieList(filteredResults);
                !filteredResults && setError(true);
            }
        };

        fetchData();
    }, [category]);

    const handlePageChange = async () => {
        setPageNum(pageNum + 1);
        const filteredResults = await fetchMovies({ action: category, page: pageNum });
        filteredResults ? setMovieList([...movieList, ...filteredResults]) : setButton(false);
    }

    return (

        <div>
            {movieList && movieList.length > 0 && (
                <div className="flex flex-col justify-center mt-14">
                    <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4">
                        {movieList.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}
                    </div>
                    {button && (<button className="btn btn-wide text-xs m-auto my-10" onClick={handlePageChange}>More</button>)}
                </div>
            )}
            {error && (
                <div className="align-center text-center mt-14">
                    <h2 className="text-sm">Something went wrong! :{'('}</h2>
                    <Image
                        className="rounded-lg opacity-40 m-auto my-4"
                        src={emptyBucket}
                        width={75}
                        height={75}
                        alt="Empty Popcorn Bucket">
                    </Image>

                </div>
            )}
        </div>
    )
};

export default Trending;