const fetchSimilarMovies = async (id, movieGenres, page) => {
    const response = await fetch('/api/movies/similar', {
        method: 'POST',
        body: JSON.stringify({id, genres: movieGenres, page }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        return false
    };
};

export default fetchSimilarMovies;