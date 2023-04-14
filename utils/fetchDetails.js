const fetchMovieData = async (movieId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.movieKey}&language=en-US&append_to_response=videos`);
        const movieData = await response.json();

        //Finding trailer/teaser video key if available
        if(movieData.videos?.results.length > 0) {
            const videoArray = movieData.videos.results;
            console.log(movieData.videos.results);
            const { key } = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            return {movieData, key};
        } else if (movieData.hasOwnProperty('success')) {
            return false
        }

        return {movieData}

    } catch (error) {
        console.log("Movie details are unavailable at this time.");
    }
}

export default fetchMovieData;