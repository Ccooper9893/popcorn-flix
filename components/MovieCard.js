import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    return (
        <div key={movie.id}>
            <Link href={"/movie/" + movie.id}>
                <Image
                    className="rounded-lg lg:scale-100 hover:scale-105"
                    style={{ transition: "transform .2s" }}
                    src={posterUrl}
                    width={216}
                    height={400}
                    alt="Movie Poster"
                >
                </Image>
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