import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    console.log('estou no MovieList', this.props);
    
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
