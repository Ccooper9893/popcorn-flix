const fetchMovies = async ({ action, page, id }) => {
    try {
        const response = await fetch('/api/movies/browse', {
            method: 'POST',
            body: JSON.stringify({ action, page, id }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            return await response.json();
        }
        return false;

    } catch (error) {
        console.log(error);
    };
};

export default fetchMovies