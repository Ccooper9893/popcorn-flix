import { useRouter } from "next/router";
import YouTube from "react-youtube";

const MovieDetail = ({ movie }) => {
    const isFound = !movie.hasOwnProperty('success');
    let key;
console.log(movie);
    if(isFound) {
        const videoArray = movie.videos.results;
        const trailer = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube') || videoArray.find(video => video.type === 'Teaser' && video.site === 'YouTube');
        key = trailer.key;
    }

    const opts = {
        height: '390',
        width: '640',
        host: "https://www.youtube-nocookie.com",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            origin: `http://localhost:3000/movie/${movie.id}`
        },
    };

    return (
        <div className="flex justify-center">
        <YouTube videoId={key} opts={opts} />
        </div>
    )
};

export const getServerSideProps = async ({ req, res }) => {
    //Extracting url parameters
    const url = req.url;
    const [spliturl] = url.split('/').slice(-1);
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${spliturl}?api_key=${process.env.movieKey}&language=en-US&append_to_response=videos`);
        const data = await response.json();
        console.log(data);
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