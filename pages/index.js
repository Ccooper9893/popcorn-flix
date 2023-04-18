import MovieCard from "@/components/MovieCard";
import SimilarMovies from "@/components/Details/SimilarMovies";

const HomePage = () => {

    const movieList = [
        { id: 510, poster_path: '/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg' },
        { id: 87827, poster_path: '/mYDKm9HxImm8PRru3KbkHAe1cmk.jpg' },
        { id: 4922, poster_path: '/9H2awZmNisMVJGp362Stv0bfUTs.jpg' },
        { id: 438631, poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
        { id: 395992, poster_path: '/wztfli5NgYDgurVgShNflvnyA3Z.jpg' },
        { id: 37472, poster_path: '/yB5v6wRhIoZxlDvCFFCQhUNezDY.jpg' },
        { id: 7350, poster_path: '/idbNSe8zsYKQL97dJApfOrDSdya.jpg' },
        { id: 4982, poster_path: '/sX9idXDqRUxE5ffww3n3RV5gL55.jpg' },
    ];

    return (
        <div className="hero place-items-center min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl min-h-screen">
                    <h1 className="my-2 text-3xl lg:text-6xl font-bold">Welcome to <span className="text-yellow-600">Bring Popcorn</span></h1>
                    <h2 className="text-2xl border-b border-white">Weekly Picks</h2>
                    <SimilarMovies similarMovies={movieList} />
                    <p className="mt-4 text-2xl italic">{`"`}Your Ultimate Destination for discovering Popcorn-Worthy Movies!{`"`}</p>
                </div>
            </div>
        </div>
    )
};

export default HomePage;