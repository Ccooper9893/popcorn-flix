import { useRouter } from "next/router";
import YouTube from "react-youtube";

const MovieDetail = ({ movie }) => {
    const isFound = movie.hasOwnProperty('success'); //Will be false if movie is found
    console.log(isFound);
    console.log(movie);
//     const videoArray = movie.videos.results;
//     const trailer = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube') || videoArray.find(video => video.type === 'Teaser' && video.site === 'YouTube');
// console.log(trailer);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            origin: 'http://localhost:3000'
        },

    };
    return (
        <h1>askjdf</h1>
        // <YouTube videoId={trailer.key} opts={opts} />
    )
};

export const getServerSideProps = async ({ req, res }) => {
    //Extracting url parameters
    const url = req.url;
    const [spliturl] = url.split('/').slice(-1);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=5'
    )
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${spliturl}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`);
        const data = await response.json();
        return {
            props: {
                movie: data,
            },
        };
    } catch (error) {
        console.log(error);
    }
};

export default MovieDetail;