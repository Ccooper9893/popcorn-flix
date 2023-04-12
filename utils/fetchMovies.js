const fetchMovies = async ({action, page}) => {
    switch (action) {
        case 'Upcoming': {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieKey}&page=${page}&append_to_response=genre`);
                const data = await response.json();
                return data;
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