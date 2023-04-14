const fetchMovies = async ({action, page, id}) => {
    switch (action) {

        case 'Upcoming': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;

        case 'Trending': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;

        case 'Category': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US
                include_adult=false&page=${page}&with_genres=${id}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }
        break;
        case 'Search': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.movieKey}&language=en-US&query=${id}%7D&page=1&include_adult=false`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error)
            }
        }
        break;
        default:
        break;
    }

};

export default fetchMovies