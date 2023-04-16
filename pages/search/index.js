import { useState } from "react";
import Image from "next/image";

import MovieCard from "@/components/MovieCard";
import emptyBucket from "../../public/emptyBucket.webp"

const Search = () => {

    const [searchInput, setSearchInput] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [found, setFound] = useState(true);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    const searchMovies = async (event) => {
        event.preventDefault();
        
        const response = await fetch('/api/movies/search', {
            method: 'POST',
            body: JSON.stringify({ action: 'Search', input: searchInput }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const results = await response.json();
            setMovieList(results);
            setFound(true);
        } else {
            setMovieList([]);
            setFound(false);
        };
    };

    return (
        <div className="mt-12 pb-10">
            <div className="flex flex-row justify-center">
                <div className="py-6 relative text-gray-600">
                    <form onSubmit={searchMovies}>
                        <input className="border-2 h-10 w-72 lg:w-96 px-5 rounded-lg text-sm focus:outline-none text-black border-gray-300 bg-white"
                            type="text" placeholder="Search movies" value={searchInput} onChange={handleInputChange} />
                        <button type="submit" className="btn btn-ghost text-black btn-circle absolute right-0 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            {movieList && (
                <div className="flex flex-row flex-wrap justify-center gap-2 p-2 lg:gap-4">
                    {movieList.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })}
                </div>
            )}
            {!found && (
                <div className="align-center text-center">
                    <h2 className="text-sm">No results</h2>
                    <Image
                        className="rounded-lg opacity-40 m-auto my-4"
                        src={emptyBucket}
                        width={75}
                        height={75}
                        alt="Empty Popcorn Bucket">
                    </Image>

                </div>
            )}
        </div>
    )
}

export default Search;