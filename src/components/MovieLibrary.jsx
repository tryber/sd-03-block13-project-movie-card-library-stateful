import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  render() {
    constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies:  props.movies,
      };
    return (
      <div>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}
