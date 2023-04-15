const fetchMovies = async ({action, page, id}) => {
    switch (action) {
        case 'latest': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=2023&with_original_language=en&with_watch_monetization_types=flatrate`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error);
            };
        };
        break;

        case 'trending': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.movieKey}&page=${page}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 500);
                console.log(filteredResults);
                return filteredResults;
            } catch (error) {
                console.log(error);
            };
        };
        break;

        case 'popular': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=10000&with_original_language=en&with_watch_monetization_types=flatrate`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
                return filteredResults;
            } catch (error) {
                console.log(error);
            };
        };
        break;

        case 'toprated': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=2000&vote_average.gte=8&with_original_language=en`);
                const data = await response.json();
                const results = data.results;
                // const sortedResults = results.sort(function (x, y) {  return y.vote_count - x.vote_count  });
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
                return filteredResults;
            } catch (error) {
                console.log(error);
            };
        };
        break;

        case 'Category': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&original_language=en&
                include_adult=false&page=${page}&with_genres=${id}`);
                const data = await response.json();
                const results = data.results;
                const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
                return filteredResults;
            } catch (error) {
                console.log(error);
            };
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
            };
        };
        break;
    }

};

export default fetchMovies