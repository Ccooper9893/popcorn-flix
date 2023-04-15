import fetch from "node-fetch";

const handler = async (req, res) => {
    const { genres, page } = req.body;

    // Covert array of genre IDs to a uri encoded string
    let listOfGenreIds = genres.map(genre => genre.id);
    let string = listOfGenreIds.toString();
    let encoded = encodeURIComponent(string);

    try {
        // const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.movieKey}&language=en-US`);
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${encoded}&with_watch_monetization_types=flatrate`);

        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);

        res.status(200).json(filteredResults);

    } catch (error) {
        res.status(500).json({ message: 'There has been a server error.' })
    }
};

export default handler;
