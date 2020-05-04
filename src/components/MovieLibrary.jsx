// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.searchGenre = this.searchGenre.bind(this);
    this.bookmarkedSearch = this.bookmarkedSearch.bind(this);
    this.onBookedmarkedChange = this.onBookedmarkedChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.textOrGenreChange = this.textOrGenreChange.bind(this);
  }

  onBookedmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  addMovie(element) {
    this.setState((el) => ({ movies: [...el.movies, element] }));
  }

  bookmarkedSearch(movie) {
    const { bookmarkedOnly } = this.state;
    if ((bookmarkedOnly && movie.bookmarked === true) || !bookmarkedOnly) return true;
    return false;
  }

  searchGenre(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre === movie.genre || !selectedGenre) return true;
    return false;
  }

  textOrGenreChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  filterMovies(movies) {
    const { searchText } = this.state;
    return movies.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText))
      && this.searchGenre(movie) && this.bookmarkedSearch(movie));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.textOrGenreChange(event, 'searchText')}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.onBookedmarkedChange}
          onSelectedGenreChange={(event) => this.textOrGenreChange(event, 'selectedGenre')}
          selectedGenre={selectedGenre}
        />

        <MovieList movies={this.filterMovies(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
