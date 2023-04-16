// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "node-fetch";

const handler = async (req, res) => {
  const { action, page, id } = req.body;
  console.log(action, page, id);
  try {
    switch (action) {
      case 'latest': {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=2023&with_original_language=en&with_watch_monetization_types=flatrate`);
        const data = await response.json();
        const results = data.results;
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
        res.status(200).json(filteredResults);
      };
        break;

      case 'trending': {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.movieKey}&page=${page}`);
        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 100);
        res.status(200).json(filteredResults);
      };
        break;

      case 'popular': {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=7500&with_original_language=en&with_watch_monetization_types=flatrate`);
        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
        res.status(200).json(filteredResults);
      };
        break;

      case 'toprated': {

        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&vote_average.gte=7&with_original_language=en`);
        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path && movie.vote_count > 7000);
        res.status(200).json(filteredResults);
      };
        break;

      case 'genre': {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.movieKey}&language=en-US&original_language=en&
          include_adult=false&page=${page}&with_genres=${id}`);
        const { results } = await response.json();
        const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
        res.status(200).json(filteredResults);
      };
        break;
      default:
        res.status(500).json({ message: 'There has been an internal server error.' })
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'There has been an internal server error.' })
  }

};

export default handler;