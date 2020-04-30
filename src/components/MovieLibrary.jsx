import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';


export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}
