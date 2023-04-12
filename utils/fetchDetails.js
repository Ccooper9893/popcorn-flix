const fetchMovieData = async (movieId) => {
    try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.movieKey}&language=en-US&append_to_response=videos`);
        const movieData = await response.json();

        //Finding trailer/teaser video key
        const videoArray = movieData.videos?.results;
        const { key } = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube') || videoArray.find(video => video.type === 'Teaser' && video.site === 'YouTube');

        return {movieData, key};

    } catch (error) {
        console.log(error)
    }
}

export default fetchMovieData;