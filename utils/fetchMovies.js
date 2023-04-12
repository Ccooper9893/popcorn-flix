const fetchMovies = async ({action, page}) => {
    switch (action) {
        case 'Upcoming': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path);
                console.log(filteredResults);
                
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;
        case 'Popular': {

        }
        break;
        default:
        break;
    }

};

export default fetchMovies