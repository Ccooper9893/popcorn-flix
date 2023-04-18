import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    console.log(movie.id, movie.poster_path);
    return (
            <Link href={"/movie/" + movie.id}>
                <div className="lg:scale-100 hover:scale-105 mx-1 transition-transform relative shadow">
                    <Image
                        className="border border-stone-900 shadow-inner shadow-stone-600"
                        style={{ transition: "transform 0.5s" }}
                        src={posterUrl}
                        width={260}
                        height={390}
                        alt="Movie Poster"
                        loading="eager"
                    >
                    </Image>
                </div>
                {/* <button onClick={() => {localStorage.setItem('movies', movie.id )}}>Add to local storage</button> */}
            </Link>

    )
};

export default MovieCard;