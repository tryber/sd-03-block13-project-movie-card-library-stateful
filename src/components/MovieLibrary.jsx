import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2>Encontre um filme</h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
