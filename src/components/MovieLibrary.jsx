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
    this.addMovie = this.addMovie.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = [...movies];
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((e) => e.bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((e) => e.genre === selectedGenre);
    }
    if (searchText) {
      filteredMovies = filteredMovies.filter((e) => e.title.includes(searchText)
        || e.subtitle.includes(searchText) || e.storyline.includes(searchText));
    }
    return filteredMovies;
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
