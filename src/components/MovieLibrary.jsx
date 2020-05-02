import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovies = this.newMovies.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onFilterMoviesMarked(movie) {
    const { bookmarkedOnly } = this.state;
    if (movie.bookmarked === true || !bookmarkedOnly) return movie;
    return false;
  }

  onFilterMovieGenre(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre === movie.genre || !selectedGenre) return movie;
    return false;
  }

  onFilterMovieText(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (el) => ((el.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
        || (el.subtitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        || (el.storyline.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
        && this.onFilterMovieGenre(el)
        && this.onFilterMoviesMarked(el),
    );
  }

  newMovies(newCard) {
    this.setState((state) => ({ movies: [...state.movies, newCard] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const resultMovies = this.onFilterMovieText(movies);
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
        <MovieList movies={resultMovies} />
        <AddMovie onClick={this.newMovies} />
      </div>
    );
  }
}

export default MovieLibrary;
