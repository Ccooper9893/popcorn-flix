// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import fetch from 'node-fetch';

const handler = async (req, res) => {

  const { input } = req.body

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&query=${input}%7D&page=1&include_adult=false`);
    const data = await response.json();
    const { results } = data;

    if (results.length > 0) {
      const filteredResults = results.filter(movie => movie.poster_path && movie.backdrop_path);
     return res.status(200).json(filteredResults);
    };

    res.status(404).json({message: 'No results found'});

  } catch (error) {
    res.status(500).json({message: 'There has been a server error.'})
  };
};

export default handler;