import { useRouter } from "next/router";

const MovieDetail = () => {
    const router = useRouter();
    const { movieId } = router.query;
    return (
        <h1>Movie ID: {movieId}</h1>
    )
};

export default MovieDetail;