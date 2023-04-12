import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
const MovieDetail = () => {

    //Grabbing movie ID from url
    const {asPath} = useRouter();
    const [movieId] = asPath.split('/').slice(-1);

    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.movieKey}&language=en-US&append_to_response=videos`);
        const movieData = await response.json();
        setMovie(movieData);

        //Finding trailer/teaser video key
        const videoArray = movieData.videos.results;
        const {key} = videoArray.find(video => video.type === 'Trailer' && video.site === 'YouTube') || videoArray.find(video => video.type === 'Teaser' && video.site === 'YouTube');
        setVideoKey(key);
      }
  
      fetchData();
    }, [movieId]);

    return (
        <div className="flex justify-center">

        </div>
    )
};

export default MovieDetail;