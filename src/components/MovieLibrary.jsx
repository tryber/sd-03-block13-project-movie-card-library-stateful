import React from 'react';
import SearchBar from './SearchBar';

// import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <h2>Encontre um filme</h2>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
