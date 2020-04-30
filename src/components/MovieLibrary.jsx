import React, { Component } from 'react';
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
      movies: props.movie,
    };
    this.fMovie = this.fMovie.bind(this);
    this.hBookChange = this.hBookChange.bind(this);
    this.iMovie = this.iMovie.bind(this);
  }

  fMovie(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (movie) => (movie.title.includes(searchText) || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText))
      && this.cMarked(movie) && this.vGenre(movie),
    );
  }

  hBookChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  iMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  vGenre(movie) {
    const { selectedGenre } = this.state;
    if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
    return false;
  }

  cMarked(movie) {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly || (bookmarkedOnly && movie.bookmarked === true)) {
      return movie;
    }
    return false;
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSearchChange}
          onBookmarkedChange={this.onSearchChange}
          onSearchTextChange={this.onSearchChange}
        />
        <MovieList movies={this.fMovie(movies)} />
        <AddMovie onClick={this.iMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
