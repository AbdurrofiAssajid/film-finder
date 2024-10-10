import React from "react";
import { motion } from "framer-motion";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <motion.section
      className="w-[310px] h-[460px] m-6 relative rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute top-0 left-0 w-full p-4 text-slate-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p>{movie.Year}</p>
      </div>

      <div className="w-full h-full">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-slate-100 p-6 group-hover:bg-transparent transition-all duration-300 ease-in-out">
        <span className="uppercase text-xs tracking-widest text-slate-700 font-medium">
          {movie.Type}
        </span>
        <h3 className="mt-2 font-serif text-slate-600 italic">{movie.Title}</h3>
      </div>
    </motion.section>
  );
};

export default MovieCard;
