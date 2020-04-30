import React from 'react';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    return (
      <div>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
