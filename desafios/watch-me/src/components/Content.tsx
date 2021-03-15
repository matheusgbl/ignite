import { GenreResponseProps, MovieProps } from '../App'
import { MovieCard } from './MovieCard';

interface ContentProps {
  genre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({genre, movies} : ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria :
          <span style = {{paddingLeft : '10px' }}>
            {genre.title}
          </span>
        </span>
      </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
  )
}