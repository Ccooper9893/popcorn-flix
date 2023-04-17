import MovieCard from "../MovieCard";

const SimilarMovies = ({ similarMovies, button, handlePageChange }) => {
    return (
        <div>
            {similarMovies && (
                <div className="mt-4">
                    {/* <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4"> */}
                    <div className="carousel carousel-center mx-2">

                        {similarMovies.map((movie) => {
                            return (
                                <div className="carousel-item" key={movie.id} >
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })}
                    </div>
                    {/* {button && (<button className="btn btn-wide text-xs m-auto my-10">More</button>)} */}
                </div>
            )}
        </div>
    )
};

export default SimilarMovies;