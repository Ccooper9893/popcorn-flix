import Image from "next/image";
import Link from "next/link";
import placeholder from "../public/emptyBucket.webp";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    return (
        <Link href={"/movie/" + movie.id}>
            <div className="lg:scale-100 hover:scale-105 mx-1 my-4 transition-transform relative shadow">
                <Image
                    className="border border-stone-900 shadow-inner shadow-stone-600"
                    style={{ transition: "transform 0.5s" }}
                    src={posterUrl}
                    width={300}
                    height={450}
                    alt="Movie Poster"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNDUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCI+CiAgPHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiM1MjAwMDBGRiI+PC9yZWN0PgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI2cHgiIGZpbGw9IiMwMDAwMDBGRiI+TG9hZGluZy4uLjwvdGV4dD4gICAKPC9zdmc+"
                >
                </Image>
            </div>
            {/* <button onClick={() => {localStorage.setItem('movies', movie.id )}}>Add to local storage</button> */}
        </Link>
    )
};

export default MovieCard;