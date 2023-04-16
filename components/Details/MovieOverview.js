import YouTube from "react-youtube";
import formatVideo from "@/utils/formatVideo";
import Rating from "./Rating";

const MovieOverview = ({ movie, videoKey }) => {

    // Configure options for Youtube player
    const mobileDimensions = {
        height: '300px',
        width: '350px',
    };
    const desktopDimensions = {
        height: '475px',
        width: '750px',
    };
    const videoOptions = formatVideo(mobileDimensions, desktopDimensions, 1);

    return (
        <div className="flex flex-col md:flex-row lg:mx-10">

            {!videoKey && <h1 className="text-center">No videos found</h1>}
            {videoKey && <YouTube className="rounded-2xl mx-auto" videoId={videoKey} opts={videoOptions} />}
            <div className="flex flex-col md:flex-row flex-wrap gap-24">
                <div>
                    <div className="tabs align-top justify-center">
                        <a className="tab tab-bordered tab-active">Overview</a>
                        <a className="tab tab-bordered">Providers</a>
                        <a className="tab tab-bordered">Similar</a>
                    </div>
                    <div className="text-center mx-8">
                    <Rating vote={movie.vote_average}/>
                        <h1 className="md:text-xl font-bold">{movie.original_title}</h1>
                        <p className="text-xs md:text-sm lg:text-sm">{movie.overview}</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieOverview;

