import MovieCard from "../MovieCard";

const SimilarMovies = ({ similarMovies, button, handlePageChange }) => {
    return (
        <div>
            {similarMovies && (
                <div className="mb-6 lg:mx-10">
                    {/* <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4"> */}
                    <div className="w-full flex flex-wrap justify-center">
                        {similarMovies.map((movie) => {
                            return (
                                <div className="m-1" key={movie.id} >
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })}
                        {button && (<button className="btn-ghost px-2 text-xs border border-stone-600 my-auto" onClick={handlePageChange}>{'More'}</button>)}
                    </div>

                </div>
            )}
        </div>
    )
};

export default SimilarMovies;