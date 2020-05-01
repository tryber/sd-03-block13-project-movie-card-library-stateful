import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  // onBookmarkedChange(event, stateInitial) {
  //   const { bookmarkedOnly } = this.state;
  //   const { value } = event.target;
  //   this.setState({ stateInitial ? 'bookmarkedOnly' :  });
  // }


  // // (bookmarkedOnly === 'true') ?
  // movies.filter((favorite) => favorite.bookmarked) : bookmarkedOnly = this.state.bookmarkedOnly
  // onSelectedGenreChange() {
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;