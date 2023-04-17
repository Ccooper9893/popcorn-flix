import { useState, useEffect } from "react";
import fetchMovies from "@/utils/fetch/movies/fetchMovies";
import PopcornFall from "@/components/misc/PopcornFall";

const HomePage = () => {
    const [movieList, setMovieList] = useState(null);
    const [pageNum, setPageNum] = useState(2);
    const [error, setError] = useState(false);
    const [button, setButton] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const filteredResults = await fetchMovies({ action: 'nowplaying', page: 1 });
    //         filteredResults && setMovieList(filteredResults);
    //         !filteredResults && setError(true);
    //     };

    //     fetchData();
    // }, []);

    // const handlePageChange = async () => {
    //     setPageNum(pageNum + 1);
    //     const filteredResults = await fetchMovies({ action: 'nowplaying', page: pageNum });
    //     filteredResults ? setMovieList([...movieList, ...filteredResults]) : setButton(false);
    // };

    return (

        <div className="carousel w-full">
            <PopcornFall />
            <div className="carousel-item relative w-full">
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="text-yellow-600">Bring Popcorn</span></h1>
                            <p className="mb-5">Your Ultimate Destination for Popcorn-Worthy Movies!</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;