// implement MovieLibrary component here
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
      movies: this.props,
    };
  }
  render() {
    console.log('estou no movielibrary,  e esse é o this.state: ', this.state);
    console.log('movielibrary this props: ', this);

    return (
      <div>
        <SearchBar searchText={this.state.searchText} onSearchTextChange='teste...' bookmarkedOnly={this.state.bookmarkedOnly} onBookedmarkedChange=''
          onSelectedGenreChange='teste'  selectedGenre={this.state.selectedGenre} />
        <MovieList movies={movies} />
        <AddMovie onClick={this.props} />
      </div>
    );
  }
}
