import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, key) {
    this.setState({ [key]: (key === 'bookmarkedOnly') ? e.target.checked : e.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.onChange(e, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) => this.onChange(e, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.onChange(e, 'selectedGenre')}
        />
        <MovieList movies={this.moviesFilter()} />
      </div>
    );
  }
}
export default MovieLibrary;
