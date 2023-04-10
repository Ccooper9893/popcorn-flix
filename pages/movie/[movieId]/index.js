import { useRouter } from "next/router";
import YouTube from "react-youtube";

const MovieDetail = ({ movie }) => {
    const isFound = movie.hasOwnProperty('success'); //Will be false if movie is found

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },

    };
    return (
        <YouTube videoId="DuWEEKeJLMI" opts={opts} />
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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${spliturl}?api_key=${process.env.API_KEY}&language=en-US`);
        const data = await response.json();
        console.log(data);
        return {
            props: {
                movie: data,
            },
        };
    } catch (error) {
        console.log(err);
    }

};

export default MovieDetail;