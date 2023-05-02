import SimilarMovies from "@/components/Details/SimilarMovies";

const HomePage = () => {

    const movieList = [
        { id: 411728, poster_path: '/gtGCDLhfjW96qVarwctnuTpGOtD.jpg' },
        { id: 11324, poster_path: '/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg' },
        { id: 550, poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
        { id: 489, poster_path: '/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg' },
        { id: 652, poster_path: '/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg' },
        { id: 333339, poster_path: '/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg' },
        { id: 1813, poster_path: '/5ZzBGpxy55OQzHxKVY11IpY6a0o.jpg' },
        { id: 9339, poster_path: '/oL0k5JA53PyoHSZqKb3cNkhwBCE.jpg' },
        { id: 587, poster_path: '/tjK063yCgaBAluVU72rZ6PKPH2l.jpg' },
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