import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetch/movies/fetchMovies";
import Image from "next/image";
import emptyBucket from "../../../public/emptyBucket.webp";

const GenreCategory = () => {

    const [movieList, setMovieList] = useState([]);
    const [pageNum, setPageNum] = useState(2);
    const [error, setError] = useState(false);
    const [button, setButton] = useState(true);

    //Grab category ID from url
    const router = useRouter();
    const { id } = router.query

    useEffect(() => {

        const fetchData = async () => {
            if (id !== undefined) {
                const filteredResults = await fetchMovies({ action: 'genre', page: 1, id });
                filteredResults && setMovieList(filteredResults);
                !filteredResults && setError(true);
            } 
        };

        fetchData();
    }, [id]);

    const handlePageChange = async () => {
        setPageNum(pageNum + 1);
        const filteredResults = await fetchMovies({ action: 'genre', page: pageNum, id: id });
        filteredResults ? setMovieList([...movieList, ...filteredResults]) : setButton(false);
    }

    return (
        <div>
            {movieList && movieList.length > 0 && (
                <div className="flex flex-col justify-center">
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

}

export default GenreCategory;