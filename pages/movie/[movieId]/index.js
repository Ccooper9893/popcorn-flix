import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import fetchMovieData from "@/utils/fetchDetails";
import Rating from "@/components/Rating";
import emptyBucket from "../../../public/emptyBucket.webp";


const MovieDetail = () => {

    //Grabbing movie ID from url
    const { asPath } = useRouter();
    const [movieId] = asPath.split('/').slice(-1);

    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    const [errorDetails, setErrorDetails] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            const details = await fetchMovieData(movieId);
            if (details) {
                setMovie(details?.movieData);
            } else {
                setErrorDetails(true)
            }

            const key = details?.key
            if (key) {
                setVideoKey(key);
            }
        }

        fetchData();
    }, [movieId]);

    const opts = {
        host: "https://www.youtube-nocookie.com",
        height: '250px',
        width: '400px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            origin: `http://localhost:3000`
        },
    };

    return (
        <div className="flex justify-center mt-10">
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

                <div className="">
                    <div className="flex flex-col justify-center">

                            {videoKey && <YouTube className="rounded-2xl m-auto" videoId={videoKey} opts={opts} />}
                        <div className="w-4/5 lg:w-2/5 m-auto border-t">
                        <h1 className="font-bold text-3xl text-center w-full mt-3">{movie.original_title}</h1>
                            <p className="text-center">{movie.overview}</p>
                            <p>Release Date: {movie.release_date}</p>
                            <Rating props={movie.vote_average} />
                        </div>
                    </div>
                </div>
            )}
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
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Special Feature - The Apartment",
//                 "key": "LZI8oxMv0rA",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Behind the Scenes",
//                 "official": true,
//                 "published_at": "2023-03-13T17:46:39.000Z",
//                 "id": "64104201ede1b028635c8aa7"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Best Actor Brendan Fraser | Oscars95 Press Room Speech",
//                 "key": "d8J_ECSA_S4",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2023-03-13T04:43:19.000Z",
//                 "id": "6414a55a25cd8500d754c824"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Makeup and Hairstyling | Adrien Morot, Judy Chin and Annemarie Bradley | Oscars95 Press Room Speech",
//                 "key": "g7pR_6h91Bc",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2023-03-13T02:29:33.000Z",
//                 "id": "6414a926a6c1040082547dc6"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Special Feature - Charlie",
//                 "key": "mOF-xlbl6NM",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2023-03-10T22:04:32.000Z",
//                 "id": "640bf8c2439be10080049080"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "\"You Left Me\" Official Clip",
//                 "key": "BdKIY8oMI_c",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Clip",
//                 "official": true,
//                 "published_at": "2023-02-24T13:30:04.000Z",
//                 "id": "63f8e6d969c70f00dca7f828"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "“People Are Amazing” Official Clip",
//                 "key": "6-lnBCKXkrs",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Clip",
//                 "official": true,
//                 "published_at": "2023-02-21T14:00:03.000Z",
//                 "id": "63f5026a6f97460079602ca8"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Scene at the Academy: The Whale",
//                 "key": "HBlj4Ez8_eo",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2023-02-17T22:26:44.000Z",
//                 "id": "6403ec7513654500965ce051"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Academy Conversations: 'The Whale' with Brendan Fraser, Samuel D. Hunter, Adrien Morot & more",
//                 "key": "djl9hbNC8X0",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2022-12-20T20:00:10.000Z",
//                 "id": "63d1137e9f51af00dc256f3b"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Official Trailer 2",
//                 "key": "nWiQodhMvz4",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Trailer",
//                 "official": true,
//                 "published_at": "2022-12-14T13:57:00.000Z",
//                 "id": "639a338557d378008c2467da"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Official Trailer",
//                 "key": "D30r0CwtIKc",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Trailer",
//                 "official": true,
//                 "published_at": "2022-11-08T13:58:00.000Z",
//                 "id": "636a6575391b9c007e8bb46f"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "The Whale at the BFI London Film Festival 2022",
//                 "key": "PKJTodSXXsk",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2022-10-12T13:10:45.000Z",
//                 "id": "63486f7e2d8ef30098c9a3c8"
//             }
//         ]
//     }
// }