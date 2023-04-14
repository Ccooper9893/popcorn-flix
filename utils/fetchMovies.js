const fetchMovies = async ({action, page, id}) => {
    switch (action) {
        case 'upcoming': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = sortedResults.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 1000);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;

        case 'trending': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                // const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 500);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;

        case 'popular': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = sortedResults.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
                return filteredResults;
            } catch (error) {
                console.log(error);
            }
        }

        break;

        case 'toprated': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.movieKey}&page=${page}&region=us`);
                const data = await response.json();
                const results = data.results;
                const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = sortedResults.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
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
                const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = sortedResults.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 1000);
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