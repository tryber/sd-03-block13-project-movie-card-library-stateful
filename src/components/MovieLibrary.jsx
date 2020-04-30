// implement MovieLibrary component here
import React, { Component } from 'react';

import originalMovies from '../data';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // moviesOriginal: originalMovies,
      movies: [...originalMovies],
    };
    // onBookmarkedOnly
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedOnly.bind(this);
    this.onSelectedGenre = this.onSelectedGenre.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const text = event.target.value;
    // const filtered = this.state.movies.filter((movie) => Object.values(movie).some((detail) => {
    //   console.log(detail);
    //   if (typeof detail === 'string') return detail.toLowerCase().includes(text.toLowerCase());
    //   return '';
    // }));
    this.setState({
      searchText: text,
      movies: 'filtered',
    });
  }

  onBookmarkedOnly() {
    this.setState((state) => ({ bookmarkedOnly: !state.bookmarkedOnly }));
    const filtered = (state) => {
      if (state.bookmarkedOnly) {
        console.log('insideFilter ', state.bookmarkedOnly);
        // console.log(state.movies.filter((movie) => movie.bookmarked === true));
        return state.movies.filter((movie) => movie.bookmarked === true);
      }
      return state.movies;
    };

    //   console.log('prevState', this.state.bookmarkedOnly);
    return this.setState((state) => {
      filtered(state);
    });
  }

  onSelectedGenre(event) {
    const { value } = event.target;
    this.setState((state) => ({
      selectedGenre: value,
      movies: state.movies.filter((movie) => movie.genre === value),
    }));
    return value;
  }

  onClick(callback) {
    this.alert(Object.values(callback));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
