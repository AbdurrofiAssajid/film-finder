'use client'
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { FaSearch } from "react-icons/fa";

// Define types
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface SearchResult {
  Search: Movie[];
}

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (title: string) => {
    setLoading(true);  // Start loading when searching
    try {
      const response = await fetch(`/api?title=${encodeURIComponent(title)}`);
      const data: SearchResult = await response.json();
      return data.Search || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
      return []; // Return an empty array on error
    } finally {
      setLoading(false); // End loading after the fetch attempt
    }
  };

  useEffect(() => {
    searchMovies("Batman").then(setMovies);
  }, []);

  const handleSearch = async () => {
    const results = await searchMovies(searchTerm);
    setMovies(results);
  };

  return (
   <div className="app py-16 flex flex-col items-center justify-center">
  <h1 className="text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-blue-950 mb-6">
    Film Finder
  </h1>

  <div className="search flex items-center justify-center my-8 p-4 w-11/12 md:w-3/4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
    <input
      className="flex-grow text-2xl font-medium text-gray-700 bg-white p-4 rounded-full outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for movies"
    />
    <div className="relative">
      <FaSearch
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer ${
          loading ? "text-red-700" : "text-slate-800"
        } transition duration-150`}
        onClick={handleSearch}
      />
    </div>
  </div>

  {loading && <div className="text-3xl text-red-700">Loading...</div>}

  {movies.length > 0 ? (
    <div className="container flex flex-wrap justify-center items-center w-full mt-12">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  ) : !loading && (
    <div className="empty flex justify-center items-center w-full mt-12">
      <h2 className="text-lg text-[#f9d3b4] font-raleway">No movies found</h2>
    </div>
  )}
</div>
  );
};

export default LandingPage;