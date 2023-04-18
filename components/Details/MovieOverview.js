import YouTube from "react-youtube";
import formatVideo from "@/utils/formatVideo";
import Rating from "./Rating";
import SimilarMovies from "./SimilarMovies";
import Providers from "./Providers";
import { useEffect, useState } from "react";
const MovieOverview = ({ movie, videoKey, similarMovies, button, handlePageChange }) => {

    const [overViewTab, setOverviewTab] = useState(true);
    const [providersTab, setProvidersTab] = useState(false);
    const [similarTab, setSimilarTab] = useState(false);

    useEffect(() => {
        setSimilarTab(false);
        setProvidersTab(false);
        setOverviewTab(true);
    }, [movie])

    //Format revenue $$$
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    const revenue = formatter.format(movie.revenue);
    const budget = formatter.format(movie.budget);


    // Configure options for Youtube player
    const mobileDimensions = {
        height: '300px',
        width: '400px',
    };
    const desktopDimensions = {
        height: '500px',
        width: '850px',
    };
    const videoOptions = formatVideo(mobileDimensions, desktopDimensions, 1);

    return (
        <div className="flex flex-col mt-6 mx-4">
            {!videoKey && <h1 className="text-center">No videos found</h1>}
            {videoKey && <YouTube className="mx-auto mt-2 z-20 shadow-lg shado shadow-black" videoId={videoKey} opts={videoOptions} />}
            <div className="flex flex-col mt-4">
                {overViewTab && <h1 className="text-2xl text-center text-white font-bold md:text-2xl">{movie.original_title}</h1>}
                <div className="tabs align-top justify-center">
                    <a className={overViewTab ? 'tab tab-bordered tab-active text-yellow-600 text-xl' : 'tab tab-bordered text-xl'} onClick={() => { setOverviewTab(true); setProvidersTab(false); setSimilarTab(false); }}>Overview</a>
                    <a className={providersTab ? 'tab tab-bordered tab-active text-yellow-600 text-xl' : 'tab tab-bordered text-xl'} onClick={() => { setOverviewTab(false); setProvidersTab(true); setSimilarTab(false); }}>Providers</a>
                    <a className={similarTab ? 'tab tab-bordered tab-active text-yellow-600 text-xl' : 'tab tab-bordered text-xl'} onClick={() => { setOverviewTab(false); setProvidersTab(false); setSimilarTab(true); }}>Similar</a>
                </div>
                <div className="text-center">
                    {overViewTab && (
                        <div className="mt-3">
                            <p className="text-lg lg:w-3/5 mx-auto">{movie.overview}</p>
                            <Rating vote={movie.vote_average} />
                            <h2 className="">Votes:  {movie.vote_count}</h2>
                            <h2 className="">Released: {movie.release_date}</h2>
                            <h2 className="">Revenue: {revenue}<small></small></h2>
                            <h2 className="">Budget: {budget}<small></small></h2>
                        </div>
                    )}
                    {providersTab && (
                        <div className="w-full">
                            <Providers provider={movie["watch/providers"].results.US} />
                        </div>
                    )}
                    {similarTab && (
                        <SimilarMovies similarMovies={similarMovies} button={button} handlePageChange={handlePageChange} />
                    )}
                </div>
            </div>
        </div>
    )
};

export default MovieOverview;

