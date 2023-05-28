import SimilarMovies from "@/components/Details/SimilarMovies";

const HomePage = () => {

    const movieList = [
        { id: 31011, poster_path: '/qNkIONc4Rgmzo23ph7qWp9QfVnW.jpg' },
        { id: 16869, poster_path: '/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg' },
        { id: 14756, poster_path: '/ggTTUXZg7trvAhsVj3eyd65bAnh.jpg' },
        { id: 2898, poster_path: '/xXxuJPNUDZ0vjsAXca0O5p3leVB.jpg' },
        { id: 497, poster_path: '/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg' },
        { id: 1547, poster_path: '/nH1lvyQvfbL5GKScTtT6zkIvDEn.jpg' },
        { id: 785663, poster_path: '/eE1SL0QoDsvAMqQly56IkRtlN1W.jpg' },
        { id: 80274, poster_path: '/xtDhTcKfx0RItj9Ywkmwx8cH95M.jpg' },
    ];

    return (
        <div className="hero place-items-center min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl min-h-screen">
                    <h1 className="my-2 text-3xl lg:text-6xl font-bold">Welcome to <span className="text-yellow-600">Bring Popcorn</span></h1>
                    <p className="mt-4 mb-8 text-2xl italic">{`"`}Your Ultimate Destination for discovering Popcorn-Worthy Movies!{`"`}</p>
                    <h2 className="text-2xl border-b border-white">Weekly Picks</h2>
                    <SimilarMovies similarMovies={movieList} />

                </div>
            </div>
        </div>
    )
};

export default HomePage;