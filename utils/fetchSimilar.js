const fetchSimilarMovies = async (movieId) => {
    console.log(movieId);
    try {
        // const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.movieKey}&language=en-US`);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.movieKey}&language=en-US&page=1`);
        const data = await response.json();
        const results = data.results;
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
        return filteredResults;
    } catch (error) {
        console.log(error)
    }
};

export default fetchSimilarMovies;