import MovieCard from "@/components/MovieCard";

const Upcoming = ({ movies }) => {

    // const filteredMovies = movies.filter(movie => {
    //     if (movie.original_language === "en") {
    //         return movie;
    //     };
    // });

    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 py-8 bg-black">
            {movies.map((movie) => {
                return (
                    <MovieCard key={movie.id} movie={movie}/>
                )
            })}
        </div>
    )
};

export const getServerSideProps = async ({ req, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=5'
    )

    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieKey}&page=1&append_to_response=videos`);
    const data = await response.json();
    console.log(data);
    return {
        props: {
            movies: data.results,
        },
    };
};

export default Upcoming;