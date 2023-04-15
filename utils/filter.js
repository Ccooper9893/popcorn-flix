const filter = (action, results) => {
    const validMovies = results.filter(movie => movie.poster_path && movie.backdrop_path);

    switch (action) {
        case 'release_date':
            break;
    case 'budget':
            break;
            case 'release_date':
            break;
        default: return validMovies
    }
}

export default filter;