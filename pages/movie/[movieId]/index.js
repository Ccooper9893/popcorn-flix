import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import fetchSimilarMovies from "@/utils/fetch/movies/fetchSimilar";
import fetchMovieData from "@/utils/fetch/movies/fetchDetails";
import Rating from "@/components/Details/Rating";
import emptyBucket from "../../../public/emptyBucket.webp";
import MovieCard from "@/components/MovieCard";
import Providers from "@/components/Details/Providers";
import MovieOverview from "@/components/Details/MovieOverview";
const MovieDetail = () => {


    //Grabbing movie ID from url
    const router = useRouter();
    const { movieId } = router.query;

    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    const [errorDetails, setErrorDetails] = useState(false);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [pageNum, setPageNum] = useState(2);
    const [button, setButton] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            if (movieId !== undefined) {
                // Get Movie Details
                const data = await fetchMovieData(movieId);
                if (data) {
                    const { movieData, key } = data;
                    setMovie(movieData);
                    setMovieGenres(movieData.genres);
                    key && setVideoKey(key);
                    console.log(movieData);
                    // Get Similar Movies
                    const similarMovieData = await fetchSimilarMovies(movieId, movieData.genres, 1);
                    similarMovieData && setSimilarMovies(similarMovieData);
                } else {
                    setErrorDetails(true);
                };
            }
        };

        fetchDetails();
    }, [movieId]);

    // Fetch for more similar movies
    const handlePageChange = async () => {
        setPageNum(pageNum + 1);
        const similarMovieData = await fetchSimilarMovies(movieId, movieGenres, pageNum);
        similarMovieData ? setSimilarMovies([...similarMovies, ...similarMovieData]) : setButton(false);
    }

    return (
        <div className="h-full">
            <div className="flex justify-center">
                {errorDetails && (
                    <div className="align-center text-center">
                        <h1 className="text-3xl">Oh No!</h1>
                        <Image
                            className="rounded-lg opacity-40 m-auto my-10"
                            src={emptyBucket}
                            width={75}
                            height={75}
                            alt="Empty Popcorn Bucket">
                        </Image>
                        <h2 className="text-xl">Movie information not yet released! Check back later!</h2>
                    </div>
                )}
                {movie && (
                    <MovieOverview movie={movie} similarMovies={similarMovies} videoKey={videoKey} button={button} handlePageChange={handlePageChange}/>
                )}
            </div>

        </div>
    )
};

export default MovieDetail;

/*--------- Example movie object --------*/

// {
//     "adult": false,
//     "backdrop_path": "/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
//     "belongs_to_collection": null,
//     "budget": 3000000,
//     "genres": [
//         {
//             "id": 18,
//             "name": "Drama"
//         }
//     ],
//     "homepage": "https://a24films.com/films/the-whale",
//     "id": 785084,
//     "imdb_id": "tt13833688",
//     "original_language": "en",
//     "original_title": "The Whale",
//     "overview": "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
//     "popularity": 400.24,
//     "poster_path": "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
//     "production_companies": [
//         {
//             "id": 41077,
//             "logo_path": "/1ZXsGaFPgrgS6ZZGS37AqD5uU12.png",
//             "name": "A24",
//             "origin_country": "US"
//         },
//         {
//             "id": 7503,
//             "logo_path": "/3K8wbNkTn7O4wX89ucnp1ZYR1XF.png",
//             "name": "Protozoa Pictures",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2022-12-09",
//     "revenue": 36752010,
//     "runtime": 116,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "",
//     "title": "The Whale",
//     "video": false,
//     "vote_average": 8.061,
//     "vote_count": 1940,
//     "videos": {
//         "results": [
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Special Feature - Creating Atmosphere with a Flute",
//                 "key": "LKxLnWqlXu4",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Behind the Scenes",
//                 "official": true,
//                 "published_at": "2023-03-14T17:30:14.000Z",
//                 "id": "641358982667780099a1fd3a"
//             },
