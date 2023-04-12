import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
    const [opacity, setOpacity] = useState({opacity: 1});
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    
    return (
        <div key={movie.id}>
            <Link href={"/movie/" + movie.id}>
                <div className="lg:scale-100 hover:scale-105 scale transition-transform"

                    onMouseEnter={e => {
                        setOpacity({opacity: 1})
                    }}
                    onMouseLeave={e => {
                        setOpacity({opacity: 1})
                    }}
                >
                    <div className="relative lg:absolute -top-6 -right-6" style={opacity}>
                    <Rating props={movie.vote_average}/>
                    </div>
                <Image
                    className="rounded-xl p-1"
                    style={{ transition: "transform .2s" }}
                    src={posterUrl}
                    width={216}
                    height={324}
                    alt="Movie Poster"
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