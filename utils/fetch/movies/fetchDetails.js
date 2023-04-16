const fetchMovieData = async (movieId) => {
    const response = await fetch('/api/movies/details', {
        method: 'POST',
        body: JSON.stringify({ movieId }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const results = await response.json();
        return results;
    } else {
        return false;
    };
};

export default fetchMovieData;