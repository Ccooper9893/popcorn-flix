
import fetch from 'node-fetch';

const handler = async (req, res) => {

    const { movieId } = req.body

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.movieKey}&language=en-US&append_to_response=videos,watch%2Fproviders,keywords`);
        const movieData = await response.json();

        //Finding trailer/teaser video key if available
        if (movieData.videos?.results.length > 0) {
            const videoArray = movieData.videos.results;
            const { key } = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            res.status(200).json({ movieData, key });

        } else if (!movieData.hasOwnProperty('success')) {
            res.status(200).json({ movieData });

        } else {
            res.status(404).json({ message: 'No results found' });
        };

    } catch (error) {
        res.status(500).json(error);
    };
};

export default handler;