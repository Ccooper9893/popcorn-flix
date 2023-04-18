import MovieCard from "../MovieCard";

const SimilarMovies = ({ similarMovies, button, handlePageChange }) => {
    return (
        <div>
            {similarMovies && (
                <div className="mb-6 lg:mx-10">
                    {/* <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4"> */}
                    <div className="carousel carousel-center w-full">
                        {similarMovies.map((movie) => {
                            return (
                                <div className="carousel-item my-2" key={movie.id} >
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })}
                        {button && (<button className="btn-ghost px-2 text-xs h-80 border rounded-r-lg border-stone-600 my-auto" onClick={handlePageChange}>{'>'}</button>)}
                    </div>

                </div>
            )}
        </div>
    )
};

export default SimilarMovies;