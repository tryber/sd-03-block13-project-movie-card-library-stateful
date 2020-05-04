// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedOnly.bind(this);
    this.onSelectedGenre = this.onSelectedGenre.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterBy = this.filterBy.bind(this);

  }

  onSearchTextChange(event) {
    const text = event.target.value;
    this.setState({ searchText: text });
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
    this.setState((state) => {
      filtered(state);
    });
  }

  onSelectedGenre(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
    return value;
  }

  onClick(callback) {
    console.log(callback);
    this.setState((prevState) => {
      prevState.movies.push(callback);
    });
  }

  filterBy(arr) {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const ifStringLowerCase = (detail) => (typeof detail === 'string'
      ? detail.toLowerCase().includes(searchText.toLowerCase())
      : false);
    const filterByText = searchText === ''
      ? arr
      : arr.filter((movie) => Object.values(movie).some((detail) => ifStringLowerCase(detail)));

    const filterByMarked = bookmarkedOnly
      ? filterByText.filter((movie) => movie.bookmarked === true)
      : filterByText;

    const filterByGender = selectedGenre
      ? filterByMarked.filter((movie) => movie.genre === selectedGenre) : filterByMarked;
    return filterByGender;
  }

  render() {
    // console.log('render the page');
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
        <MovieList movies={this.filterBy(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
