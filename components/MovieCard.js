import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`

    return (
        <div key={movie.id}>
            <Link href={"/movie/" + movie.id}>
                <div className="lg:scale-100 scale- hover:scale-105 mt-4 mx-1 transition-transform relative shadow">
                    <div className="absolute right-56 -top-6">
                        <Rating props={movie.vote_average} />
                    </div>

                    <div className="py-3 bg-stone-950">
                        <div className="w-20 absolute top-1 left-8">
                            <div className="text-sm"><small>Votes: </small>{movie.vote_count}</div>
                        </div>

                        <div className="w-20 absolute right-3 top-1">
                            <div className="text-sm">{movie.release_date}</div>
                        </div>

                    </div>
                    <Image
                        className="border-t border-stone-500"
                        style={{ transition: "transform 0.5s" }}
                        src={posterUrl}
                        width={256}
                        height={384}
                        alt="Movie Poster"
                        loading="eager"
                    >
                    </Image>
                </div>
            </Link>
        </div>
    )
};

export default MovieCard;

/* Example movie object
[
    {
        "adult": false,
        "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 10058.912,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 410
    }
]
*/