import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import fetchMovies from "@/utils/fetchMovies";

const Search = () => {

    const [searchInput, setSearchInput] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    const searchMovies = async (event) => {

        event.preventDefault();
        const filteredResults = await fetchMovies({action: 'Search', id: searchInput});
        setMovieList(filteredResults);
    }

    return (
        <div className=" bg-black">
            <div className="flex flex-row justify-center">
                <div className="py-6 relative mx-auto text-gray-600">
                    <form onSubmit={searchMovies}>
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black"
                            type="text" placeholder="Search movies" value={searchInput} onChange={handleInputChange}/>
                        <button type="submit" className="btn btn-ghost text-black btn-circle absolute right-0 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            {!movieList
                ? (<h1>...</h1>)
                : (

                    <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4">
                        {movieList.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}

                    </div>

                )}
        </div>
    )
}

export default Search;