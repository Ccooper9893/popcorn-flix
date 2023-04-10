const Upcoming = ({movies}) => {

    const filteredMovies = movies.filter(movie => {
        if(movie.original_language === "en") {
            return movie;
        };
    });
    
    return <h1>Upcoming Page</h1>
};

export const getServerSideProps = async ({req, res}) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=5'
      )

    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return {
        props: {
            movies: data.results,
        },
    };
};

export default Upcoming;

//Image link for posters
//https://image.tmdb.org/t/p/original/${posterCode}

/* Example movie object
[
    {
        "adult": false,
        "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 10058.912,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 410
    }
]
*/