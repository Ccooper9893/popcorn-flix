import fetch from "node-fetch";

const handler = async (req, res) => {
    const {id, genres, page } = req.body;
    const movieId = parseInt(id);

    // Covert array of genre IDs to a uri encoded string
    let listOfGenreIds = genres.map(genre => genre.id);
    let string = listOfGenreIds.toString();
    let encoded = encodeURIComponent(string);

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.movieKey}&language=en-US&page=${page}`);
        // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${encoded}&original_language=en`);
        // const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.movieKey}&language=en-US&page=1`);

        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.id !== movieId);

        res.status(200).json(filteredResults);

    } catch (error) {
        res.status(500).json({ message: 'There has been a server error.' })
    }
};

export default handler;
